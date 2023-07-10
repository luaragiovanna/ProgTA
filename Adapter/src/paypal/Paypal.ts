import Token from "../utils/Token";
import IPaypalPaymment from "./IPaypalPayment";

export default class Paypal implements IPaypalPaymment{
    private token: Token;
    authToken(): Token {
        return new Token();
    }
    paypalReceive(): void {
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token);
        console.log("Enviando pagamento via Paypal");
    }
    paypalPayment(): void {
        this.token = this.authToken();
        console.log("TOKE: " + this.token.token);
        console.log("Recebendo pagamento via Paypal");
    }
    
}