import Token from "../utils/Token";
import ICorreios from "./ICorreios";

export default class Correios implements ICorreios{
    private tokne: Token;
    authToken(): Token {
       return new Token;
    }
    sendCorreios(): void {
        this.tokne = this.authToken();
        console.log("TOKEN do pacote via CORREIOS = " + this.tokne.token);

       console.log("Recebendo pacote via CORREIOS");
    }
    receiveCorreios(): void {
        console.log("Enviando pacote via CORREIOS");
    }

}