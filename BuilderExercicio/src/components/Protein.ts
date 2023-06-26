    export default class Protein{
    
       
            constructor(private _protein: String, private _grama : number){}
                get protein(): String{
                    return this._protein;
                }
        
                set protein(protein: String){
                    this._protein = protein;
                }

                get grama(): number{
                    return this._grama;
                }

                set grama(grama: number){
                    this._grama = grama;
                }
            
    
    }