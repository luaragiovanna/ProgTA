import IVehicle from "./interface/IVehicle";

export default class Bicycle implements IVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Bike: Iniciando rota. . .");
    }
    getCargo(): void {
        console.log("Bike: Pacote embarcado.");
    }

}