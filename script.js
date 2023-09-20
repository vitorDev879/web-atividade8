function valida() {
    
    var campoTexto = document.getElementById('texto');
    var valor = campoTexto.value; 
    

    if(!isNaN(valor)) {
        campoTexto.value = ''; 
    } 

}
