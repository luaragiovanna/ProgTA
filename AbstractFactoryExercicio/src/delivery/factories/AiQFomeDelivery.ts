import Beer from "../type/typeDrink/Beer";
import IDrinks from "../type/typeDrink/interface/IDrink";
import Hamburguer from "../type/typefood/Hamburguer";
import IFood from "../type/typefood/interface/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class AiQFomeDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrinks {
        return new Beer();
    }
    createDeliveryFood(): IFood {
        return new Hamburguer();
    }
    
}