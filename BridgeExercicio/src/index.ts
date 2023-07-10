import Playstation from "./components/Playstation";
import XBox from "./components/XBox";
import IConsole from "./interfaces/IConsole";
import AdvancedPlay from "./jogar/AdvancedPlay";
import Play from "./jogar/Play";


function comecarGame(tipoConsole :IConsole){
    console.log("COMEÇANDO. . . . . . .");
    const game = new Play(tipoConsole);
    game.playing();
    game.result();
}

//
comecarGame(new XBox());
console.log("----------------");
comecarGame(new Playstation());
function advencedPlay(tipoConsole: IConsole){
    console.log("Aguarde.....");
    const play = new  AdvancedPlay(tipoConsole);
    play.playing();
    play.result();
    play.challenge();
}

advencedPlay(new XBox());
advencedPlay(new Playstation());