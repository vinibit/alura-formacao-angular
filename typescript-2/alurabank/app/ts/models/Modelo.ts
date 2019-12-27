// app/ts/models/Modelo.ts

import { Imprimivel, Igualavel } from "./index";

export interface Modelo<T> extends Imprimivel, Igualavel<T> { }