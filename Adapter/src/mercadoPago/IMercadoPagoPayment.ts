import Token from "../utils/Token";

export default interface IMercadoPagoPayment{
    authToken(): Token;
    pagamentoMercadoPago(): void;
    recebimentoMercadoPago(): void;
    

}