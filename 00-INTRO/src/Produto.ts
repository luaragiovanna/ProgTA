import Cliente from "./Cliente";
import Venda from "./Venda";


export default class Produto {
    private _codigo: number;
    private _descricao: string;
    protected _valor: number;

  
      constructor(codigo: number, descricao: string, valor: number) {
      this._codigo = codigo;
      this._descricao = descricao;
      this._valor = valor;
    }

    get valor(): number {
      return this._valor;
    }
    get codigo(): number {
      return this._codigo;
    }
    get descricao(): string {
      return this._descricao;
    }
  }