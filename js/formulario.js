$(document).ready(function() {
    $("#creaCarta").hide();
    $("#formulario").submit(function(event){

        event.preventDefault();

        let rut = $("#rut").val();
        let appaterno = $("#apPaterno").val().charAt(0).toUpperCase() + $("#apPaterno").val().slice(1).toLowerCase();
        let apmaterno = $("#apMaterno").val().charAt(0).toUpperCase() + $("#apMaterno").val().slice(1).toLowerCase();
        let nombre = $("#nombre").val().charAt(0).toUpperCase() + $("#nombre").val().slice(1).toLowerCase();
        let fechaNac = $("#fechaNac").val();
        let edad = $("#edad").val();
        let genero = $("#genero").val();
        let email = $("#email").val();
        let celular = $("#celular").val();
        let profesion = $("#profesion").val().toLowerCase();
        let motivacion = $("#motivacion").val().toLowerCase();

        let sr = "";
        let texto = "";

        let validacion = true;

        //Validación de RUT
        if(rut.length < 9 || rut.length > 10){
            $("#mrut").html("El rut debe contener entre 9 y 10 digitos.");
            validacion = false;
        }
        else{
            $("#mrut").html("");
        }

        //Validación de apellido paterno
        if(appaterno.length < 3 || appaterno.length > 20){
            $("#mapPaterno").html("El apellido paterno debe contener entre 3 y 20 caracteres.");
            validacion = false;
        }
        else{
            $("#mapPaterno").html("");
        }

        //Validación de apellido materno
        if(apmaterno.length < 3 || apmaterno.length > 20){
            $("#mapMaterno").html("El apellido materno debe contener entre 3 y 20 caracteres.");
            validacion = false;
        }
        else{
            $("#mapMaterno").html("");
        }
        
        //Validación de nombre
        if(nombre.length < 3 || nombre.length > 20){
            $("#mnombre").html("El nombre debe contener entre 3 y 20 caracteres.");
            validacion = false;
        }
        else{
            $("#mnombre").html("");
        }
        
        //Validación de fecha de nacimiento
        if(fechaNac == "" || fechaNac == null){
            $("#mfechaNac").html("Debe ingresar la fecha de nacimiento.");
            validacion = false;
        }
        else{
            $("#mfechaNac").html("");
        }
        
        //Validación de edad
        if(edad < 18 || edad > 35){
            $("#medad").html("Para este trabajo de tener entre 18 y 35 años.");
            validacion = false;
        }
        else{
            $("#medad").html("");
        }
        
        //Validación de género
        if(genero === ""){
            $("#mgenero").html("Debe seleccionar un género.");
            validacion = false;
        }
        else {
            $("#mgenero").html("");
        }

        if(genero == "Masculino"){
            sr = "Sr. ";
        }
        else if(genero == "Femenino"){
            sr = "Sra. ";
        }
        
        //Validación de email
        if(email.length <= 0){
            $("#memail").html("Debe ingresar la dirección de correo eléctronico.");
            validacion = false;
        }
        else{
            $("#memail").html("");
        }
        
        //Validación de Celular
        if(celular.length < 9 || celular.length > 12){
            $("#mcelular").html("El número de celular debe contener entre 9 y 12 dígitos.");
            validacion = false;
        }
        else{
            $("#mcelular").html("");
        }
        
        //Validación de Profesión
        if(profesion.length <= 0){
            $("#mprofesion").html("Debe ingresar la profesión.");
            validacion = false;
        }
        else{
            $("#mprofesion").html("");
        }
        
        //Validación de Motivación
        if(motivacion.length <= 0){
            $("#mmotivacion").html("Debe ingresar la motivación.");
            validacion = false;
        }
        else{
            $("#mmotivacion").html("");
        }

        if(validacion ==  true){
            $("#creaCarta").show();

            arreglo=fechaNac.split("-");
            let mes = "";
            if(arreglo[1] == "01"){
                mes = "enero";
            }
            else if(arreglo[1] == "02"){
                mes = "febrero";
            }
            else if(arreglo[1] == "03"){
                mes = "marzo";
            }
            else if(arreglo[1] == "04"){
                mes = "abril";
            }
            else if(arreglo[1] == "05"){
                mes = "mayo";
            }
            else if(arreglo[1] == "06"){
                mes = "junio";
            }
            else if(arreglo[1] == "07"){
                mes = "julio";
            }
            else if(arreglo[1] == "08"){
                mes = "agosto";
            }
            else if(arreglo[1] == "09"){
                mes = "septiembre";
            }
            else if(arreglo[1] == "10"){
                mes = "octubre";
            }
            else if(arreglo[1] == "11"){
                mes = "noviembre";
            }
            else if(arreglo[1] == "11"){
                mes = "diciembre";
            }

            let fechaNew2 = "el día " + arreglo[2]+" de "+ mes +" de "+arreglo[0];
    

            texto = 
            sr+" "+nombre+" "+appaterno+"."+
            "\nR.U.T.: "+rut+
            "\nGénero: "+genero+"."+
            
            "\n\nEstimados señores,\n"+
    
            "\nMe dirijo a ustedes para presentar mi candidatura para la posición de apoyo ambiental en Chiloé, la cual vi anunciada en su sitio web. Creo que mi formación y experiencia pueden ser de gran utilidad para su organización."+
            
            "\n\nMi nombre es "+nombre+" "+appaterno+" "+apmaterno +" y tengo "+edad+" años. Mi fecha de nacimiento es "+ fechaNew2 +". Soy graduado de "+profesion+", y mi motivacion es: "+motivacion+"."+
            "\n\nAdemás, he tenido la oportunidad de participar en proyectos de investigación relacionados con el medio ambiente y la conservación de especies nativas. Esto me ha permitido desarrollar habilidades en el manejo de herramientas y técnicas de investigación, así como en la interpretación de datos científicos."+
            
            "\n\nEstoy seguro de que mi experiencia y conocimientos pueden ser útiles para su organización y estoy muy motivado para aprender más sobre las iniciativas y proyectos que desarrollan. Quedo a su disposición para ampliar cualquier información que necesiten en relación a mi formación y experiencia."+
            
            "\n\nQuedo atento a sus comentarios y me pueden contactar a través de mi correo electrónico "+email+" o al número de celular "+celular+" para cualquier consulta adicional."+
            
            "\n\nAgradezco de antemano la oportunidad de presentar mi candidatura y quedo a la espera de su respuesta."+
            
            "\n\nAtentamente,\n\n\n"+
            
            nombre+" "+appaterno+" "+apmaterno;

            $("#carta").html(texto)
            event.preventDefault();
        }

        else{
            $("#creaCarta").hide();
        }

    });

})