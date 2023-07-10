export default class Token{
    private _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InRva2VuX3BhZ2FtZW50byJ9.1kxoJQFDn05Hysfj7zHuNe13fn1lT2EBqdYsGuyjaAI";
    //token permite achar tipo de algoritmo chave etc fomto jwt.io
    public get token() {
        return this._token;
    }
    /*public set token(value) {
        this._token = value;
    }*/
}