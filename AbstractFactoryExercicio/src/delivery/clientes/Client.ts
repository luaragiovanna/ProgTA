
import IDeliveryFactory from "../factories/interfaces/IDeliveryFactory";
import IDrinks from "../type/typeDrink/interface/IDrink";
import IFood from "../type/typefood/interface/IFood";

export default class Client {
    private food: IFood;
    private drink: IDrinks;
  
    
    constructor(factory: IDeliveryFactory){
        this.food = factory.createDeliveryFood();
        this.drink= factory.createDeliveryDrink();
      
    }

    StartDelivery() {
        this.drink.startDelivery();
        this.food.startDelivery();
    }
}