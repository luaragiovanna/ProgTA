import Client from "./delivery/clientes/Client";
import Company from "./delivery/consts/Company";
import AiQFomeDelivery from "./delivery/factories/AiQFomeDelivery";
import IfoodDelivery from "./delivery/factories/IfoodDelivery";
import IDeliveryFactory from "./delivery/factories/interfaces/IDeliveryFactory";



const currentCompany = Company.IFOOD;
let factory! : IDeliveryFactory;


switch(currentCompany){
    case Company.IAQFOME : 
        factory = new AiQFomeDelivery();
        break;
    case Company.IFOOD : 
        factory = new IfoodDelivery();
        break;
    default : 
        console.error("Companhia não definida!");
}
const client = new Client(factory);
client.StartDelivery();


