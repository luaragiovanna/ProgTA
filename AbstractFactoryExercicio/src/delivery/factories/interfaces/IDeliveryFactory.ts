import IDrinks from "../../type/typeDrink/interface/IDrink";
import IFood from "../../type/typefood/interface/IFood";

export default interface IDeliveryFactory {
    createDeliveryDrink():IDrinks;
    createDeliveryFood(): IFood;
}