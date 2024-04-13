/*
const frutas=['manzana','pera','uva','sandia','melon'];
console.log(frutas);
console.log(frutas.length);
frutas.push('platano');
console.log(frutas);
frutas.pop();
console.log(frutas);
frutas.shift();
console.log(frutas);
frutas.unshift('platano');
console.log(frutas);
frutas.sort();
console.log(frutas);
frutas.reverse();
console.log(frutas);
frutas.splice(1,2);
console.log(frutas);
frutas.splice(1,0,'platano','mango');
console.log(frutas);
const frutas2=frutas.toSpliced(1,2);
console.log(frutas2);
console.log(frutas);
frutas.splice(3,0,'maracuya');
console.log(frutas);
let elemento=frutas.pop();
console.log(elemento); 
let elemento2=frutas.shift();
console.log(elemento2); 
let cadena=frutas.toString();
console.log(cadena); 
let cadena2=frutas.join(' - ');
console.log(cadena2);
let cadena3=frutas.concat(frutas2);
console.log(cadena3);


console.log(cadena3);
let cadena4=cadena3.slice(4,5);
console.log(cadena4); 

const Persona={nombre:"Juan",apellido:"Perez",edad:20,fechaNacimiento:"17/11/1996"};
console.log(Persona);
console.log(Persona.nombre);
console.log(Persona.apellido);
console.log(Persona.edad);
console.log(Persona.fechaNacimiento);
Persona.edad=21;
console.log(Persona);
Persona.edad=null;
console.log(Persona);


const arreglobidimensional=[[1,2,3],[4,5,6],[7,8,9]];
let arreglounidimensional=arreglobidimensional.flat();
console.log(arreglobidimensional);
console.log(arreglounidimensional);
*/

//Nodo: elemento de una lista enlazada, se modifica un valor
class Nodo{
    constructor(valor){
        this.valor=valor;
        this.siguiente=null;
    }
}
let primero=null;

function agregarElemento(valor){
    let nuevo=new Nodo(valor);
   nuevo.siguiente=primero;
   primero=nuevo;
}

function mostrar(){
    let actual=primero;
    while(actual!=null){
        console.log(actual.valor);
        actual=actual.siguiente;
    }
}

function eliminar(){
    primero=primero.siguiente;
}


agregarElemento(15);
agregarElemento(20);
agregarElemento(25);
  
mostrar();
console.log(primero);

class Nodo{
    constructor(valor){
        this.valor=valor;
        this.siguiente=null;
    }
}
let primero=null;
 

//Pila: Va dirigida al valor tope
class Pila{
    constructor(){
        this.tope=null;
    }

    agregarElementoPila(valor){
        let nuevo=new Nodo(valor);
        nuevo.siguiente=this.tope;
        this.tope=nuevo;
    }
    imprimir(){
        let actual=this.tope;
        while(actual!=null){
            console.log(actual.valor);
            actual=actual.siguiente;
        }
    }
}

let pila=new Pila();
pila.agregarElementoPila(15);
pila.agregarElementoPila(20);
pila.agregarElementoPila(25);
pila.imprimir();
console.log(pila);

class Cola{
    constructor(){
        this.cola=null;
    }
    agregarElementoCola(valor){
        this.cola.push(valor);
    }
    EliminarElementoCola(){
        return this.cola.shift();
    }
    imprimir(){
        console.log(this.cola);
    }
}
let cola= new Cola();
cola.agregarElementoCola(15);
cola.agregarElementoCola(20);
cola.agregarElementoCola(25);
cola.imprimir();
console.log(cola);