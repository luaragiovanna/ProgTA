import IVehicle from "./vehicle/interface/IVehicle";

export default abstract class Transport{
    
    startTransport(): void{
        const vehicle = this.createTransport();// cria veiculo q e instancia de ivehicle n pode variar por isso const
        vehicle.startRoute(); //depois de criar comeca rota
    };

    protected abstract createTransport(): IVehicle;//retorna uma das interfaces




}