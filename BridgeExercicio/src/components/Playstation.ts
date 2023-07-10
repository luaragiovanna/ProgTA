import IConsole from "../interfaces/IConsole";


export default class Playstation implements IConsole{
    private nome: String;

   
	public get $nome(): String {
		return this.nome;
	}

    /**
     * Setter $nome
     * @param {String} value
     */
	public set $nome(value: String) {
		this.nome = "PLAYSTATION";
	}
   

    constructor(){
        console.log("Configurando jogo via PLAYSTATION :)");
        this.configureGame();
    }
    configureGame(): void {
        console.log("CONFIGURANDO PLAYSTATION. . .")
    }
    authToken(): void {
       console.log("TOKEN DA PLATAFORMA PLAYSTATION. . .")
    }

}