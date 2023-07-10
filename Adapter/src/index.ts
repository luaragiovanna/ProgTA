import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";
import PayoneerAdapter from "./adapters/PayonerrAdapter";
import MercadoPago from "./mercadoPago/MercadoPago";
import Payoneer from "./payoneer/Payoneer";
import IPaypalPaymment from "./paypal/IPaypalPayment";
import Paypal from "./paypal/Paypal";

const pagamento : IPaypalPaymment = new Paypal();
console.log("PAYPAL");
pagamento.paypalReceive();
pagamento.paypalPayment();
//--------------------------//
console.log("PAYONEER");
const pagamento2 :IPaypalPaymment = new PayoneerAdapter(new Payoneer);
pagamento2.paypalReceive();
pagamento2.paypalPayment(); 
//-----------------------//
console.log("MERCADO PAGO");
const pagamento3 : IPaypalPaymment = new MercadoPagoAdapter(new MercadoPago);
pagamento3.paypalPayment();
pagamento3.paypalReceive();


//assim consegue fazer pagamento do payonner por meio dos metodos da interface do paypal

/*const pagamento2 : IPayoneerPayment = new Payoneer();
pagamento2.sendPayment();
pagamento2.receivePayment();*/
