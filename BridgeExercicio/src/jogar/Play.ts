import IConsole from "../interfaces/IConsole";
import IPlay from "./IPlay";

export default class Play implements IPlay{

    constructor(private console: IConsole){};
    playing(): void {
        console.log("Jogo inciado");
    }
    result(): void {
       console.log("Jogo iniciado com SUCESSO!!!!!!!");
    }
    
}