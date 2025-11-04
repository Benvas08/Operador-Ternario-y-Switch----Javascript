//PARTE A- Operador Ternario

// --- 1 ---
let edad_Par = 10;
let ParImpar = (edad_Par % 2 == 0)? "Numero Par":"Numero Impar";
console.log(ParImpar);

// --- 2 ---
let usuarioActivo = true;
let mensanje = (usuarioActivo)? "Usuario Conectado": "Usuario Desconectado";
console.log(mensanje);

// --- 3 ---
let nota = 7;
let resultado = (nota >= 6)? "Aprobado": "Desaprobado";
console.log(resultado);

// --- 4 ---
let dia = "domingo";
let mensajeDescanso = (dia == "domingo" || dia == "sabado")? "Dia de descanso": "Dia laboral";

// --- 5 ---
let edad = 12;
let acceso = (edad >= 13)? "Acceso permitido": "Acceso restringido";
console.log(acceso);

// PARTE B- Instruccion switch

// --- 1 ----
let dia_semana = "lunes";
switch(dia_semana){
    case "lunes":
        console.log("Inicio de semana");
        break;
    case "martes":
        console.log("Dia comun");
        break;
    case "miercoles":
        console.log("Mitad de semana");
        break;
    case "jueves":
        console.log("Dia comun");
        break;
    case "viernes":
        console.log("Dia comun");
        break;
    case "sabado":
        console.log("Fin de semana");
        break;
    case "domingo":
        console.log("Fin de semana");
        break;
}

// --- 2 ---
let color = "verde";
switch(color){
    case "verde":
        console.log("Sigue, semaforo en verde");
        break;
    case "amarillo":
        console.log("Precaucion, semaforo en amarillo");
        break;
    case "rojo":
        console.log("Detente, semaforo en rojo");
        break;
    default:
        console.log("Color desconocido");
        break;
}

// --- 3 ---
let mes = "enero";
switch(mes){
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        console.log("EL mes tiene 31 dias");
        break;
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        console.log("El mes tiene 30 dias");
        break;
    case "febrero":
        console.log("El mes tiene 28 o 29 dias");
        break;
}

// --- 4 ---
let calificiacion = "B";
switch(calificiacion){
    case "A":
        console.log("Excelente");
        break;
    case "B":
        console.log("Bueno");
        break;
    case "C":
        console.log("Suficiente");
        break;
    case "D":
        console.log("Reprobado");
        break;
}

// --- 5 ---
let opcion = 3;
switch(opcion){
    case 1:
        console.log("Seleccionaste la opcion 1. Incio");
        break;
    case 2:
        console.log("Seleccionaste la opcion 2. Configuracion");
        break;
    case 3:
        console.log("Seleccionaste la opcion 3. Salir");
        break;
    default:
        console.log("Opcion no valida");
        break;
}