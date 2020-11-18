/**
 * Implementa las funciones básicas de una calculadora básica.
 * Los dígitos se capturan todos en un solo método. Se añaden al String de la pantalla.
 * 
 */
class Calculadora {

    constructor() { // Constructor que puede tener parámetros o no
        this.pantalla = ""; //Atributo String donde se acumulan las teclas pulsadas
        this.memoria = 0;
    }

    actualizarPantalla() {
        document.getElementById("pantalla").value = this.pantalla;
    }

    digito(digito) {
        this.pantalla = this.pantalla.concat(digito);
        this.actualizarPantalla();
    }

    punto() {
        this.pantalla = this.pantalla.concat(".");
        this.actualizarPantalla();
    }

    suma() {
        this.pantalla = this.pantalla.concat("+");
        this.actualizarPantalla();
    }

    resta() {
        this.pantalla = this.pantalla.concat("-");
        this.actualizarPantalla();
    }

    multiplicacion() {
        this.pantalla = this.pantalla.concat("*");
        this.actualizarPantalla();
    }

    division() {
        this.pantalla = this.pantalla.concat("/");
        this.actualizarPantalla();
    }

    /**
     * Guarda en memoria el valor de la pantalla
     */
    ms() {
        var input = document.getElementById("pantalla").value;
        if (isNaN(input))
            alert("Only numbers can be stored in memory") //Probando el objeto predefinido alert() cuyo uso está desaconsejado debido a que muchos usuarios pueden tenerlo deshabilitado en sus navegadores
        else
            this.memoria = Number(input);
        this.pantalla = "";//Se asume que guardando en memoria el usuario quiere realizar una operación distinta a continuación y por lo tanto se facilita limpiando el display
        this.actualizarPantalla();
    }

    /**
     * Borra lo que está en memoria
     */
    mc() {
        this.memoria = 0;
        document.getElementById("pantalla").value = "Memoria: 0";
        this.pantalla = ""; //Resetea también los valores previos almacenados en pantalla
    }

    /**
     * Recupera lo que está en memoria
     */
    mr() {
        this.pantalla = this.memoria.toString();
        this.actualizarPantalla();
    }

    /**
     * Resta el valor actual de pantalla al valor
     * almacenador en memoria
     */
    mMenos() {
        var numero = this.pantalla;
        if (isNaN(numero))
            alert("La pantalla solo debe contener un número para poder realizar la operación M-")
        else
            this.memoria = this.memoria - Number(numero);
        this.pantalla = this.memoria.toString();
        this.actualizarPantalla();
    }

    /**
     * Suma el valor actual de pantalla al valor
     * almacenador en memoria
     */
    mMas() {
        var numero = this.pantalla;
        if (isNaN(numero))
            alert("La pantalla solo debe contener un número para poder realizar la operación M-")
        else
            this.memoria = this.memoria + Number(numero);
        this.pantalla = this.memoria.toString();
        this.actualizarPantalla();
    }

    borrarPantalla() {
        this.pantalla = "";
        this.actualizarPantalla();
    }

    /**
     * Utiliza la función eval() para realizar los cálculos
     */
    igual() {
        var input;
        var resultado;
        input = this.pantalla;
        try {
            resultado = eval(input); //Evalúa cualquier expresión de Javascript, es un intérprete dentro del intérprete de JavaScript. Permite la metaprogramación, modificarnos a nosotros mismos, por lo tanto es muy peligroso por temas de seguridad
            document.getElementById("pantalla").value = resultado;
            this.pantalla = resultado.toString();
        }
        catch (err) { //Cualquier error. No me meto en qué tipo de error
            document.getElementById("pantalla").value = "Error = " + err;
        }
    }
}

var calculadora = new Calculadora();