import Token from "../utils/Token";

export default interface IPaypalPaymment{
    authToken(): Token;
    paypalReceive(): void;
    paypalPayment(): void;
    
}