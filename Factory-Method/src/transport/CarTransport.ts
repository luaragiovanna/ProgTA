import Transport from "./Transport";
import Car from "./vehicle/Car";
import IVehicle from "./vehicle/interface/IVehicle";

export default class createTransport extends Transport{
    protected createTransport(): IVehicle {//cria transporte e retorna interface 
        return new Car();
    }
    
}