const Calcular = () => {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var r;
    var op = document.getElementById("operacion").value;
    var m = "El resultado de la";
      
    
    switch(op){       
        case "-" :
            r = num1 - num2;
            m += "resta";
            break;
        case "*" :
            r = num1 * num2;
            m += "multiplicación";
            break;
        case "/" :
            r = num1 / num2;
            m += "división";
            break;
        case "+" :
            r = num1 + num2;
            m += "suma";
            break;
    }
    console.log(`${m} es : ${r}`)
    document.getElementById("resultado").value = r;

}

const Concatena = () => { 
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
   document.getElementById('who').value = `${nombre} ${apellido}`;

}

const SumarUno = () => {
    var numero = parseFloat(document.getElementById('numero').value);
    var i;
    for(i = 0; i < 10; i++){
        var r = numero + 1
        
    }
    document.getElementById("resultadito").value = r;  
   
     
        
}

