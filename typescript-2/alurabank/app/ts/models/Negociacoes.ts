// app/ts/models/Negociacoes.ts

import { Negociacao } from './index'
import { logarTempoDeExecucao } from '../helpers/decorators/index';

export class Negociacoes {

    private _negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {

        this._negociacoes.push(negociacao);
    }

    paraArray() {

        return ([] as Negociacao[]).concat(this._negociacoes);
    }
}