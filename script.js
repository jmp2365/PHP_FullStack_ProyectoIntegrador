
function resumen() {

    let categoria = document.getElementById('categoria').selectedIndex; //General, estudiante, trainee, junior
    let cantidad = document.getElementById('cantidad').value; //cantidad de tickets
    let totalObj= document.getElementById('total');

    switch (categoria) {
        case 0:   //General
            factor = 1;
            break;
        case 1:   //estudiante
            factor = 0.2;
            break;
        case 2:   //trainee
            factor = 0.5;
            break;
        case 3:   //junior
            factor = 0.85;
   }

    let textoTotal = "Total a Pagar: $ " + (cantidad * factor * 200); //texto del banner total

    if (cantidad != 0)
        totalObj.innerText = textoTotal;
    else
        document.getElementById('total').innerText = "Total a Pagar: $ ";


}

function borrar() { //Vacia los inputs y repone los placeholders
    document.getElementById('categoria').selectedIndex = 0;
    document.getElementById('nomComprador').value = "";
    document.getElementById('nomComprador').placeholder = "Nombre";
    document.getElementById('apeComprador').value = "";
    document.getElementById('apeComprador').placeholder = "Apellido";
    document.getElementById('correoComprador').value = "";
    document.getElementById('correoComprador').placeholder = "Correo";
    document.getElementById('cantidad').value = "";
    document.getElementById('cantidad').placeholder = "cantidad";
    document.getElementById('total').innerText = "Total a Pagar: $ ";
}