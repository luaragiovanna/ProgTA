import Correios from "./Correio/Correios";
import ICorreios from "./Correio/ICorreios";
import Trasnportadora from "./Transportadora/Transportadora";
import TransportadoraAdapter from "./adapters/TransportadoraAdapter";



const pacote : ICorreios = new Correios();
console.log("INFORMAÇÕES DO PACOTE");
pacote.sendCorreios();
console.log("--------------------------------------------")

//IMPLEMENTANDO TRANSPORTADORA COM METODOS DELA 
const pacote2 : Trasnportadora = new Trasnportadora();
console.log("INFORMAÇÕES DO PACOTE:");
pacote2.sendTransportadora();
console.log("--------------------------------------------")

//UTILIZANDO COM ADAPTER
const pacote3 : ICorreios = new TransportadoraAdapter(new Trasnportadora);
console.log("INFORMAÇÕES DO PACOTE: ");
pacote3.sendCorreios();
pacote3.receiveCorreios();

