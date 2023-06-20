import IFood from "./interface/IFood";

export default class HotDog implements IFood{
    startDelivery(): void {
        this.getFood();
        console.log("Iniciando delivery de HotDog");
     }
    getFood(): void {
       console.log("Entregando hotdog");
    }

}