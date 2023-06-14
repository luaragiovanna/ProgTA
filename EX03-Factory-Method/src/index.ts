import GameLocation from "./location/GameLocation";
import Location from "./location/Location";
import MovieLocation from "./location/MovieLocation";

declare var process;
let item : Location;
if(process.argv.includes("--G")){
    item = new GameLocation();
    item.starItem();

}
else if(process.argv.includes("--M")){
    item = new MovieLocation();
    item.starItem();

}
else{
    console.log("Selecione uma opção, --M ou --G");
}