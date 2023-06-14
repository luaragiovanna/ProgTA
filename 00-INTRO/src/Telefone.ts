import Cliente from "./Cliente";
export default class Telefone{
    private _ddd: string;
    private _numero: number;
    private _tipo : string;

    constructor(ddd: string, numero: number, tipo: string) {
        this._ddd = ddd;
        this._numero = numero;
        this._tipo = tipo;
      }

      get ddd(): string {
        return this._ddd;
      }

      get numero(): number {
        return this._numero;
      }

      get tipo(): string {
        return this._tipo;
      }
}
