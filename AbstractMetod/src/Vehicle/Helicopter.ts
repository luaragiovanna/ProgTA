import IAircraft from "./aeria/aerial/interfaces/IAircrafts";


export default class Helicopter implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Iniciando a decolagem Helicoptero")
    }
    getCargo(): void {
       console.log("Passageiros ok. Ligando Hélices")
    }
    checkWind(): void {
        console.log("Ventos a 25km, Sudeste, ventos ok!")
    }
}
