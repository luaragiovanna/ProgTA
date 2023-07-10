import IConsole from "../interfaces/IConsole";
export default class XBox implements IConsole{

 
	public get $nome(): String {
		return this.nome;
	}

	public set $nome(value: String) {
		this.nome = "XBOX";
	}
    private nome : String;

    constructor(){
        console.log("Configurando jogo via XBOX:)");
        this.configureGame();
    }
    
    configureGame(): void {
        console.log("CONFIGURANDO XBOX");
    }
    authToken(): void {
        
        console.log("TOKEN DA PLATAFORMA XBOX: ");
    }

}