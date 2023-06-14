import Cliente from "./Cliente";
import Produto from "./Produto";

export default class Venda{

    private _codigo: number;
    private _data: string;
    private cliente: Cliente;
    private _produtos: Produto[];
  
    constructor(codigo: number, data: string, cliente: Cliente, produtos: Produto[]) {
      this._codigo = codigo;
      this._data = data;
      this.cliente = cliente;
      this._produtos = produtos;
    }

    get codigo(): number {
      return this._codigo;
      } 
    get data(): String {
      return this._data;
      } 
       
      calcularValorTotal(): number {
        let valorTotal = 0;
        for (const produto of this._produtos) {
          valorTotal += produto.valor;
        }
        return valorTotal;
      }
  
}