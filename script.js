// Para seleccionar SOLAMENTE un id se puede utilizar querySelector(#nombreId)
const display = document.querySelector("#display")
// Para seleccionar TODOS las etiquetas del mismo tipo se puede utilizar querySelector(nombreEtiquetas)
const buttons = document.querySelectorAll("button")
// Recorrer todos los botones del html
buttons.forEach((item)=>{
    // Con esto conseguimos que cuando le demos click a cualquier boton el programa sepa reconocer a que boton hemos pulsado
    // No ponemos ningun parametro porque utilizaremos los id's de los propios botones
    item.onclick = ()=>{
        // Utilizamos el item con su id para seleccionar un boton
        if (item.id === "clear") {
            // Con esta funcionalidad borramos todo lo que haya en pantalla
            display.innerText =""
        }else if (item.id === "backspace") {
            // Accedemos a todo lo que esta en el display y lo convertimos a una cadena de caracteres, esto se hace con toString()
            let string = display.innerText.toString()
            // Devuelve los caracteres de una cadena que comienza en una localizacion especificada y de acuerdo al numero de caracteres que se indicaran. El primer caracter es 0 y el ultimo se tiene que calcular con length -1
            display.innerText = string.substr(0,string.length -1)
        }else if (display.innerText !="" && item.id === "equal") {
            // con eval() coge un string y lo entiende como una equacion aritmetica, es decir, como un problema matematico
            display.innerText= eval(display.innerText)
        }else if (display.innerText == "" && item.id=="equal") {
            display.innerText = "Null"
            // Cuando pase 2 segundos que el display se ponga en null
            setTimeout(() => (display.innerText = ""),2000);
        }else{
            // Estaremos mostrando los numeros y signos dependiendo el boton que pulsemos
            display.innerText += item.id

        }
    }
})

const themeToggleBtn = document.querySelector(".theme-toggler")
const calculator = document.querySelector(".calculator")
let isDark = true
themeToggleBtn.onclick=()=>{
    calculator.classList.toggle("dark")
    themeToggleBtn.classList.toggle("active")
    isDark=!isDark
}