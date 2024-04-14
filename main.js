let FormProyectos = document.getElementById("FormProyectos");
let IngProyectos = document.getElementById("IngresoProyectos");
FormProyectos.style.display = "none";
let ToltalAnual=document.getElementById("TotalAño");

function validarNombre(){
    let nombre=document.getElementById("nombre").value;
    console.log(nombre);
    let formato=/^[a-zA-Z]{3,}(?:[a-zA-Z]{3,})*$/
    if(nombre===""){
        document.getElementById("ErrorNombre").style.display="block";
        document.getElementById("ErrorNombre").innerHTML="El Campo es Obligatorio";
    }
    else{ if(!formato.test(nombre)){
        document.getElementById("ErrorNombre").style.display="block";
        document.getElementById("ErrorNombre").innerHTML="Ingrese caracteres válidos (solo letras)";
        }
    
        else{
            document.getElementById("ErrorNombre").style.display="none";
        }
    }
}

function validarApellido(){
    let apellido=document.getElementById("apellido").value;
    console.log(apellido);
    let formato=/^[a-zA-Z]{3,}(?:[a-zA-Z]{3,})*$/
    if(apellido===""){
        document.getElementById("ErrorApellido").style.display="block";
        document.getElementById("ErrorApellido").innerHTML="El Campo es Obligatorio";
    }
    else{ if(!formato.test(apellido)){
        document.getElementById("ErrorApellido").style.display="block";
        document.getElementById("ErrorApellido").innerHTML="Ingrese caracteres válidos (solo letras)";
        }
        else{ 
        document.getElementById("ErrorApellido").style.display="none";
        }
    }
}
document.getElementById("nombre").addEventListener("blur",validarNombre);
document.getElementById("apellido").addEventListener("blur",validarApellido);

function Saludo(){
    const Formulario = document.getElementById("Formulario");
    let nombre = Formulario.nombre.value;
    let apellido = Formulario.apellido.value;
    let boton = document.getElementById("boton");
    let FormProyectos = document.getElementById("FormProyectos");
    
    if(confirm("¿confirmas que eres "+nombre+" "+apellido+"?")){
        Formulario.innerHTML= ("Hola "+nombre+" "+apellido+", puedes iniciar:");
        Formulario.style.fontSize="20px";
        Formulario.style.ftextAlign="center";
        boton.style.display = "none";
        FormProyectos.style.display = "";
        }
}

var i = 0
const Lista = [];
function IngresoProyectos(){
    i=i+1;
    const cons=i;
    const Proyecto=document.getElementById("proyecto").value;
    const ubicacion=document.getElementById("Ubicacion").value;
    const valor=document.getElementById("Valor").value;
    const plazo=document.getElementById("Plazo").value;
    const fact=parseInt(valor)/parseInt(plazo);
    let NProyecto = {cons, Proyecto, ubicacion,valor, plazo,fact}
    Lista.push(NProyecto);
    console.log(NProyecto); //revision de funcionamiento

    let _tabla='<table>';
    _tabla=_tabla+"<tr> Historico de Facturacion </tr>"
    _tabla=_tabla+"<tr>  <th>#</th><th>Proyecto</th> <th>Ubicacion</th> <th>Vr Contrato</th> <th>Plazo Contrato</th> <th>Facturacion Mes</th> </tr>";  
    Lista.forEach(p => {
    _tabla=_tabla+"<tr>";
    _tabla=_tabla+"<td>"+p.cons+"</td>";
    _tabla=_tabla+"<td>"+p.Proyecto+"</td>";
    _tabla=_tabla+"<td>"+p.ubicacion+"</td>";
    _tabla=_tabla+"<td>"+p.valor+"</td>";
    _tabla=_tabla+"<td>"+p.plazo+"</td>";
    _tabla=_tabla+"<td>"+p.fact+"</td>";
    _tabla=_tabla+"</tr>";
    });
    _tabla=_tabla+"</table>"
    document.getElementById("lista").innerHTML=_tabla;
    
}

