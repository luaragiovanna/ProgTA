import Telefone from "./Telefone";
import Endereco from "./Endereco";
export default class Cliente{
    private _nome: string;
    private _CPF: number;
    private _dataNascimento: number;
    private _sexo: string;
    private _endereco: Endereco;
    private _telefone: Telefone[];

    
    constructor(nome: string, cpf: number, telefone: Telefone[], sexo: string, endereco: Endereco) {
        this._nome = nome;
        this._CPF = cpf;
        this._telefone = telefone;
        this._sexo = sexo;
        this._endereco = endereco;
      }

      get nome(): string {
        return this._nome;
      }
      get cpf(): number {
        return this._CPF;
      }
      get dataNasc(): number {
        return this._dataNascimento;
      }
      get sexo(): string {
        return this._sexo;
      }
      get endereco(): Endereco {
        return this._endereco;
      }
      
      }
