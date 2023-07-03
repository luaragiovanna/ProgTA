import Token from "../utils/Token";

export default interface ITransportadora{
       

        authToken(): Token;
        sendTransportadora(): void; 
        receiveTransportadora(): void;
}