import Company from "./Vehicle/Company";
import Client from "./Vehicle/clientes/Client";
import Type from "./Vehicle/consts/Type";
import TypeVehicle from "./Vehicle/consts/TypeVehicle";
import NineNineTransport from "./Vehicle/factories/NineNineTransport";
import UberTransport from "./Vehicle/factories/UberTransport";
import ITransporFactory from "./Vehicle/factories/interfaces/ITransportFactory";



const currentCompany = Company.UBER;
const typeVehicle = TypeVehicle.HELICOPTHER;
const constType = Type.AEREO;



let factory! : ITransporFactory;

switch(currentCompany){
    case Company.UBER : 
        factory = new UberTransport();
        break;
    case Company.NINENINE : 
        factory = new NineNineTransport();
        break;
    default : 
        console.error("Companhia não definida!");
}
const client = new Client(factory, constType, typeVehicle);
client.startRoute();


