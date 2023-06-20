import ILandVehicle from "./interfaces/ILandVehicles";


export default class Car implements ILandVehicle{
   
    
    startRoute(): void {
        this.getCargo();
        console.log("Carro: Iniciando o Trajeto...");
    }
    getCargo(): void {
       console.log("Carro: Pegamos os passageiros, estamos prontos!");
    }
}