
import IAircraft from "../../aeria/aerial/interfaces/IAircrafts";
import ILandVehicle from "../../land/interfaces/ILandVehicles";




export default interface ITransporFactory{
    createTransportVehicle(vehicle: string): ILandVehicle;
    createTransportAircraft(vehicle: string) : IAircraft;
   
}