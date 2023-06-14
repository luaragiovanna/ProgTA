import IItem from "./interface/IItem";

export default class Movie implements IItem{
    start(): void {
        this.getDescription();
        console.log("Start!");
    }
   
    getDescription(): void {
        console.log("Descrição do filme aqui....");
    }
}