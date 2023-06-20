import IFood from "./interface/IFood";

export default class Hamburguer implements IFood{
    startDelivery(): void {
        this.getFood();
       console.log("Iniciando delivery de Hamburguer");
    }
    
    getFood(): void {
        console.log("Pegando hamburguer");
    }
    
}