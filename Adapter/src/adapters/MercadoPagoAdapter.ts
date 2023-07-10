import MercadoPago from "../mercadoPago/MercadoPago";
import IPaypalPaymment from "../paypal/IPaypalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPaypalPaymment{
    private token : Token;
    constructor(private mercadoPago: MercadoPago){
        console.log("Adaptando pagamento MercadoPago para usar metodos da IPaypalPayment");
    }
    authToken(): Token {
       return new Token();
    }
    paypalReceive(): void {
        return this.mercadoPago.recebimentoMercadoPago();
    }
    paypalPayment(): void {
        return this.mercadoPago.pagamentoMercadoPago();
    }
    
}