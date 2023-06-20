import IAircraft from "./aeria/aerial/interfaces/IAircrafts";


export default class Airplane implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Avião: Iniciando a Decolagem");
    }
    getCargo(): void {
        console.log("Avião: Pegamos os passageiros, estamos prontos!");
    }
    checkWind(): void {
        console.log("Avião: Ventos a 25 km, ventos ok!")
    }
}
