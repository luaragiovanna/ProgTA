import SanduicheBuilder from "./builders/SanduicheBuilder";
import Director from "./director/Director";

import Sanduice from "./products/Sanduiche";



const builder: SanduicheBuilder = new SanduicheBuilder();
const director: Director = new Director(builder);

director.constructXSalad();
const sanduiche1 : Sanduice = builder.getSanduiche();

console.log("-----------------X SALADA----------------------");
console.log("Montando sanduba " + sanduiche1.sanduicheType);
console.log("PAO = " + sanduiche1.bread);
console.log("PROTEINA = "+ sanduiche1.protein.protein + " Grama " + sanduiche1.protein.grama );
console.log("SALADA = " + sanduiche1.salad.salad);
console.log("MOLHOS = " );
for(const v in sanduiche1.sauces){
    console.log(sanduiche1.sauces[v].sauce)
}


director.constructHotDog();

const sanduiche2: Sanduice = builder.getSanduiche();
console.log("-----------------HOT DOG----------------------");
console.log("Montando sanduba " + sanduiche2.sanduicheType);
console.log("PAO = " + sanduiche2.bread);
console.log("PROTEINA = " + sanduiche2.protein.protein +  " grama " + sanduiche2.protein.grama);
console.log("SALADA = " + sanduiche2.salad.salad);
console.log("MOLHOS = " ); 
for(const v in sanduiche2.sauces){
    console.log(sanduiche2.sauces[v].sauce)
}

