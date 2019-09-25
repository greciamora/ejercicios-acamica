function imprimirEscalera(n) {
    for(let i = 0; i< n; i(n - 1){ 
        let numeralesFila
        let espaciosFila
        let resultadoFila
        
    //completar la fila con espacios
        espaciosFila = stringConSimbolo(n-(i+1,) " ");

    //completar la fila con #
        numeralesFila = stringConSimbolo(i+1 "#");

        resultadoFila = resultadoFila + numeralesFila;
      console.log(resultadoFila);
    }
    function stringConSimbolo(n, simbolo){
        let resultado = " ";
        for(let i = 0; i < n; i++){
            resultado += simbolo

        }
        return resultado;
    }
imprimirEscalera(4);