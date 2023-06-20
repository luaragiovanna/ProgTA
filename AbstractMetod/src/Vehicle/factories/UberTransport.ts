

import Airplane from "../Airplane";
import IAircraft from "../aeria/aerial/interfaces/IAircrafts";
import Car from "../land/Car";
import ILandVehicle from "../land/interfaces/ILandVehicles";

import ITransporFactory from "./interfaces/ITransportFactory";

export default class UberTransport implements ITransporFactory{
    createTransportVehicle(vehicle: string): ILandVehicle {
   
       return new Car();
    }
    createTransportAircraft(): IAircraft {
       return new Airplane();
    }
}