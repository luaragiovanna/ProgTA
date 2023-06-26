import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";
import { default as Sanduice, default as Sanduiche } from "../products/Sanduiche";
import IBuilder from "./IBuilder";

export default class SanduicheBuilder implements IBuilder{
    
    private sanduiche = new Sanduice();
    addSauces(values: Sauce) {
        this.sanduiche.addSauce(values);
    }
   
    reset(): void {
        this.sanduiche = new Sanduiche(); //libera espaço e zera
    }
    getSanduiche(): Sanduice {
        const result : Sanduice = this.sanduiche;
        this.reset();
        return result;
    }
    setSanduicheType(value: SanduicheType) {
        this.sanduiche.sanduicheType = value;
    }
    setBread(value: Bread) {
        this.sanduiche.bread = value;
    }
    setProtein(value: Protein) {
        this.sanduiche.protein = value;
    }
    setSalada(value: Salad) {
        
        this.sanduiche.salad = value;
    }
  

}