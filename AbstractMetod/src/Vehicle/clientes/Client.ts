
import IAircraft from "../aeria/aerial/interfaces/IAircrafts";
import ITransporFactory from "../factories/interfaces/ITransportFactory";
import ILandVehicle from "../land/interfaces/ILandVehicles";


export default class Client{
    private vehicle : ILandVehicle;
    private aircraft : IAircraft;
    type: string;
    TypeVehicle: string
   


    constructor(factory: ITransporFactory, type: string, typeVehicle: string){
        
        this.vehicle = factory.createTransportVehicle(typeVehicle);
        this.aircraft = factory.createTransportAircraft(typeVehicle);
        this.type = type;
        this.TypeVehicle = typeVehicle;

    }
    checkVehicleType(): void {
        if(this.type == "TERRESTRE"){
        if (this.TypeVehicle == "CAR") {
          console.log("O veiculo é um carro");
          this.vehicle.startRoute();
        } else if (this.TypeVehicle == "MOTORCYLE") {
            console.log("O veiculo é uma moto");
            this.vehicle.startRoute();
        }
        } 
        else if (this.TypeVehicle == "HELICOPTHER") {
            console.log("O veiculo é um helicoptero");
            this.vehicle.startRoute();
        } else {
          console.log("Tipo de veiculo nao existe");
        }
      }

    startRoute() : void{
        this.checkVehicleType();
        if(this.type == "TERRESTRE"){
            this.vehicle.startRoute();
            
        }
      else if(this.type == "AEREO"){
        this.checkVehicleType();
            this.aircraft.startRoute();
      }
        
    }
}