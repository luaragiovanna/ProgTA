import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./director/Director";
import Vehicle from "./products/Vehicle";

const builder: VehicleBuilder = new VehicleBuilder();
const director : Director = new Director(builder);

//nova constante veiculo
director.constructSedanCar();
// dentro da constante o sedan q esta zerado
const sedan : Vehicle = builder.getVehicle();
console.log("------------------SEDAN---------------------");
console.log("Criando veiculo. . ." + sedan.vehicleType);
console.log("Motor: " + sedan.engine.power);
console.log("Transmissao: " + sedan.transmission);
console.log("Num de rodas: " + sedan.wheels.length);
console.log("Num de assentos: " + sedan.seats);

console.log("-------------------TRUCK---------------------");
//cria uma nova constante veiculo
director.constructTruck();
const truck : Vehicle = builder.getVehicle();

console.log("Criando veiculo. . ." + truck.vehicleType);
console.log("Motor: " + truck.engine.power);
console.log("Transmissao: " + truck.transmission);
console.log("Num de rodas: " + truck.wheels.length);
console.log("Num de assentos: " + truck.seats);

