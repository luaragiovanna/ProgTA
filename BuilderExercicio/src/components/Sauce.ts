export default class Sauce{
    
    constructor(private _sauces: string){}

    get sauce(){
        return this._sauces;
    }

    set sauce(sauce:string){
        this._sauces = sauce;
    }
}