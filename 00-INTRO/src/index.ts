import Cliente from "./Cliente";
import Venda from "./Venda";
import Produto from "./Produto";
import Endereco from "./Endereco";
import Telefone from "./Telefone";

const endereco = new Endereco('Rua Saldanha Marinho', 123, 'PR', 'Guarapuava');
const telefone : Telefone[] = [new Telefone ('42', 998451360, 'Celular')];
const cliente = new Cliente('Roberto', 123456789, telefone, 'Masculino', endereco);


const produtos : Produto[] = [new Produto (1, "Celular", 120.00), 
                            new Produto(2, "Roupa", 30.50)]

const venda = new Venda(100, "2023-06-12", cliente, produtos )
console.log("Cliente: " + cliente.nome);
console.log("Itens comprados:" + produtos[1].descricao);
const valorTotal = venda.calcularValorTotal();
console.log('Valor total da venda:', valorTotal);