import ICorreios from "../Correio/ICorreios";
import Transportadora from "../Transportadora/Transportadora";
import Token from "../utils/Token";

export default class TransportadoraAdapter implements ICorreios{
        private token : Token;
        constructor(private transportadora : Transportadora ){
            console.log("Adaptando metodos para conseguir utilizar com objeto da transportadora");
        }
    authToken(): Token {
        
        return new Token();
    }
    sendCorreios(): void {
       return this.transportadora.sendTransportadora();
    }
    receiveCorreios(): void {
        return this.transportadora.receiveTransportadora();
    }

    
}