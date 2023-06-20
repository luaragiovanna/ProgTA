import SoftDrink from "../type/typeDrink/SoftDrink";
import IDrinks from "../type/typeDrink/interface/IDrink";
import HotDog from "../type/typefood/HotDog";
import IFood from "../type/typefood/interface/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class IfoodDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrinks {
        return new SoftDrink;
    }
    createDeliveryFood(): IFood {
       return new HotDog;
    }
   

}