import IDrinks from "./interface/IDrink";

export default class Beer implements IDrinks{
    startDelivery(): void {
        this.getDrink();
        console.log("Iniciando delivery de cerveja");
    }
    getDrink(): void {
        console.log("Bebendo cerveja");
    }
    
}