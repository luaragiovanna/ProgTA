import Cliente from "./Cliente";

export default class Endereco{
    private _rua: string;
    private _numero: number;
    private _cidade: string;
    private _estado: string;
 
    constructor(rua: string, numero: number, estado: string, cidade: string) {
        this._rua = rua;
        this._numero = numero;
        this._estado = estado;
        this._cidade = cidade;
      }
      get rua(): string {
        return this._rua;
      }
      get numero(): number {
        return this._numero;
      }
      get cidade(): string {
        return this._cidade;
      }
      get estado(): string {
        return this._estado;
      }
}