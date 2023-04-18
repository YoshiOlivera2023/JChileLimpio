function enviarForm(){
    // console.log('Enviando el formulario.')
    let rut = "";
    let appaterno = "";
    let apmaterno = "";
    let nombre = "";
    let fechaNac = "";
    let edad = "";
    let genero1 = "";
    let genero2 = "";
    let email = "";
    let celular = "";
    let profesion = "";
    let motivacion = "";

    rut = document.getElementById("rut").value;
    appaterno = document.getElementById("apPaterno").value;
    apmaterno = document.getElementById("apMaterno").value;
    nombre = document.getElementById("nombre").value;
    fechaNac = document.getElementById("fechaNac").value;
    edad = document.getElementById("edad").value;
    genero1 = document.getElementById("genero1").value;
    genero2 = document.getElementById("genero2").value;
    email = document.getElementById("email").value;
    celular = document.getElementById("celular").value;
    profesion = document.getElementById("profesion").value;
    motivacion = document.getElementById("motivacion").value;

    //Validación de RUT
    if(rut.length === 9 || rut.length === 10){
        alert("Rut válidado.");
    }
    else if(rut.length === 0 || rut === null){
        alert("Campo vacío.");
    }
    else{
        alert("Rut inválido.");
    }

    //Validación de apellido paterno
    if(appaterno.length >= 3 || appaterno.length <= 20){
        alert("Apellido paterno válidado.");
    }
    else if(appaterno.length === 0 || appaterno === null){
        alert("Campo vacío.");
    }
    else{
        alert("Apellido paterno inválido.");
    }

    //Validación de apellido materno
    if(apmaterno.length === 3 || apmaterno.length === 20){
        alert("Apellido materno válidado.");
    }
    else if(apmaterno.length === 0 || apmaterno === null){
        alert("Campo vacío.");
    }
    else{
        alert("Apellido materno válidado.");
    }
    
    //Validación de nombre
    if(nombre.length === 3 || nombre.length === 20){
        alert("Nombre válidado.");
    }
    else if(nombre.length === 0 || nombre === null){
        alert("Nombre vacío.");
    }
    else{
        alert("Nombre inválido.");
    }
    
    //Validación de fecha de nacimiento
    if(fechaNac == true){
        alert("Fecha válidada.");
    }
    else if(fechaNac === false || fechaNac === null){
        alert("Campo vacío.");
    }
    else{
        alert("Fecha válidada.");
    }
    
    //Validación de edad
    if(edad >= 18 || edad <= 35){
        alert("Edad válidado.");
    }
    else if(edad === null || edad === 0){
        alert("Campo vacío.");
    }
    else{
        alert("Edad inválida.");
    }
    
    //Validación de género
    if(genero1 === true && genero2 === false){
        alert("Género Masculino válidado.");
    }
    else if(genero1 === false && genero2 === true){
        alert("Género Femenino válidado.");
    }
    else if(genero1 === false && genero2 === false){
        alert("Campo vacío.");
    }
    
    //Validación de email
    if(email.length > 5){
        alert("Email válidado.");
    }
    else if(email.length === 0 || email === null){
        alert("Campo vacío.");
    }
    else{
        alert("Email inválido.");
    }
    
    //Validación de Celular
    if(celular.length === 9 || celular.length === 12){
        alert("Número de celular válidado.");
    }
    else if(celular.length === 0 || celular === null){
        alert("Campo vacío.");
    }
    else{
        alert("RNúmero de celular inválido.");
    }
    
    //Validación de Profesión
    if(profesion.length > 5){
        alert("Profesión válidada.");
    }
    else if(profesion.length === 0 || profesion === null){
        alert("Campo vacío.");
    }
    else{
        alert("Profesión inválido.");
    }
    
    //Validación de Motivación
    if(motivacion.length > 5){
        alert("Motivación válidado.");
    }
    else if(motivacion.length === 0 || motivacion === null){
        alert("Campo vacío.");
    }
    else{
        alert("Motivación inválido.");
    }
    
    return false;
}

function crearCarta(){
    
}