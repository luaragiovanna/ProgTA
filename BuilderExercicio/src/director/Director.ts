import IBuilder from "../builders/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default class Director {
    constructor(private builder: IBuilder){}

    constructXSalad(){
        this.builder.setSanduicheType(SanduicheType.XSALADA);
        this.builder.setBread(Bread.PAO_BRANCO);
        this.builder.setProtein(new Protein("Frango", 150));
        this.builder.setSalada(new Salad("Tomate"));
        this.builder.addSauces(new Sauce("Mostarda e mel"));
        this.builder.addSauces(new Sauce("Ketchup"));
    }
    constructHotDog(){
        this.builder.setSanduicheType(SanduicheType.HOTDOG);
        this.builder.setBread(Bread.PAO_BRANCO);
        this.builder.setProtein(new Protein("SALSICHA", 150));
        this.builder.setSalada(new Salad("PIMENTAO"));
        this.builder.addSauces(new Sauce("MOSTARDA"));
        this.builder.addSauces(new Sauce("Ketchup"));
    }

}
