import IDrinks from "./interface/IDrink";

export default class SoftDrink implements IDrinks{
    startDelivery(): void {
        this.getDrink();
       console.log("Iniciando delivery de SoftDrink");
    }

    getDrink(): void {
        console.log("Bebendo SoftDrink");
    }
    
}