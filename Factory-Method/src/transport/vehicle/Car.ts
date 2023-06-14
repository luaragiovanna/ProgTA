import IVehicle from "./interface/IVehicle";

export default class Car implements IVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Carro: Iniciando rota. . .");
    }
    getCargo(): void {
        console.log("Carro: Passageiro embarcado.");
    }

}