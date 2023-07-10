import Payoneer from "../payoneer/Payoneer";
import IPaypalPaymment from "../paypal/IPaypalPayment";
import Token from "../utils/Token";
//CLASSE QUE IMPLEMENTA UM NO OUTRO
export default class PayoneerAdapter implements IPaypalPaymment {
    private token : Token;
    constructor(private payonner: Payoneer){
        console.log("Adaptando Payoneer no paypal");
    }
    authToken(): Token {
        return new Token();
    }
    paypalReceive(): void {
        return this.payonner.receivePayment(); //chama payoneer retorna o metodo da interface payoneer
    }
    paypalPayment(): void {
        return this.payonner.sendPayment();
    }

}