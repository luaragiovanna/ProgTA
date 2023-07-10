
import IConsole from "../interfaces/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play{

    
  
    
    constructor(console : IConsole){
        super(console);
    }

    public challenge(): void{
        console.log("ESCOLHA DO JOGO: . . ." );
    }
}
