
import Helicopter from "../Helicopter";
import IAircraft from "../aeria/aerial/interfaces/IAircrafts";
import Motorcyle from "../land/Motorcyle";
import ILandVehicle from "../land/interfaces/ILandVehicles";
import ITransporFactory from "./interfaces/ITransportFactory";


export default class NineNineTransport implements ITransporFactory{
   
  
    createTransportVehicle(): ILandVehicle {
        return new Motorcyle();
    }
    createTransportAircraft(): IAircraft {
       return new Helicopter();
    }
}
