/* 
    ser autenticavel siguinifica ter o metodo autenticar

    ducky type => comum em linguagens fracamente tipada
*/

export class SistemaAutenticacao{

    static login(auntenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(auntenticavel)){
            return auntenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(auntenticavel){
        return "autenticar" in auntenticavel && auntenticavel.autenticar instanceof Function
    }

}