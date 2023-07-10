import Token from "../utils/Token";
import IMercadoPagoPayment from "./IMercadoPagoPayment";

export default class MercadoPago implements IMercadoPagoPayment{
    private token : Token;
    authToken(): Token {
        return new Token();
    }
    pagamentoMercadoPago(): void {
       
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token);
        console.log("Pagamento via MercadoPago.");
    }
    recebimentoMercadoPago(): void {
        this.token = this.authToken();
        console.log("TOKEN: "  +  this.token.token);
        console.log("Recebimento via MercadoPago.");
    }
    
}