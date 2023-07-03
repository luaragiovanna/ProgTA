
import Token from "../utils/Token";
import ITransportadora from "./ITransportadora";

export default class Trasnportadora implements ITransportadora{
    private token : Token;
    authToken(): Token {
        return new Token();
    }
   
    sendTransportadora(): void {
        this.token = this.authToken();
        console.log("Token do pacote da TRANSPORTADORA = " + this.token.token);
        console.log("Enviando pacote via TRANSPORTADORA");
    }
    receiveTransportadora(): void {
        console.log("Recebendo pacote via TRANSPORTADORA");
    }

}