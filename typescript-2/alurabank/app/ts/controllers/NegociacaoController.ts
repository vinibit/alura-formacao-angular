// app/ts/controllers/NegociacaoController.ts

import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao, NegociacaoParcial } from '../models/index';
import { domInject, throttle } from '../helpers/decorators/index';
import { NegociacaoService } from '../services/index';

let timer = 0;

export class NegociacaoController {

    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes();

    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    private _service = new NegociacaoService();

    constructor() {

        this._negociacoesView.update(this._negociacoes);
    }
    
    @throttle()
    adiciona() {

        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if (!this._ehDiaUtil(data)) {
            this._mensagemView.update('Somente negociações em dias úteis, por favor!');
            return
        }
        
        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, ',')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );
            
        this._negociacoes.adiciona(negociacao);
        
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso.');

        this.limpa();
    }

    limpa() {
        
        this._inputData.val("");
        this._inputQuantidade.val("1");
        this._inputValor.val("0.0");
    }

    @throttle(1000)
    importarDados() {
        
        this._service
            .obterNegociacoes(res => {

                if (res.ok) {
                    return res;
                } else {
                    throw new Error(res.statusText);
                }
            })
            .then(negociacoes => {
                negociacoes.forEach(negociacao =>
                    this._negociacoes.adiciona(negociacao));
                this._negociacoesView.update(this._negociacoes);
            });

    }
    
    private _ehDiaUtil(data: Date) {

        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo ;
    }
}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta, 
    Quinta, 
    Sexta, 
    Sabado, 
}