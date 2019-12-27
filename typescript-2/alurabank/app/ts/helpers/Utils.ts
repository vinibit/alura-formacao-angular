// app/ts/helpers/Utils.ts
import { Imprimivel } from '../models/index';

export function imprime(...objetos: Imprimivel[]) {
    objetos.forEach(negociacao => negociacao.paraTexto());
}