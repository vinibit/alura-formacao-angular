// app/ts/models/Negociacoes.ts

import { Modelo } from "./Modelo";
import { Negociacao } from './index'
import { logarTempoDeExecucao } from '../helpers/decorators/index';

export class Negociacoes implements Modelo<Negociacoes> {
    
    private _negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        
        this._negociacoes.push(negociacao);
    }
    
    paraArray() {
        
        return ([] as Negociacao[]).concat(this._negociacoes);
    }
    
    paraTexto(): void {
        
        console.log('-- paraTexto --');
        console.log(JSON.stringify(this._negociacoes));
    }

    igualA(negociacoes: Negociacoes): boolean {
        
        return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.paraArray());
    }
}