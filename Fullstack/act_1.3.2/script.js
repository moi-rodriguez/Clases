// alert('mensaje generado con javascript!')
// console.log('mensaje genrado con JavaScript')

// muestra el texto del input mensaje-texto
function calcular() {
    num1 = document.getElementById('num1').value
    num2 = document.getElementById('num2').value

    num1 = parseInt(num1)
    num2 = parseInt(num2)

    if ((num1 != num2) && ((num1 && num2) > 0)) {
        suma = num1 + num2
        console.log('Suma: ' + suma)

        resta = num1 - num2
        console.log('Resta: ' + resta)

        divi = num1 / num2
        console.log('División: ' + divi)

        multi = num1 * num2
        console.log('Multiplicación: ' + multi)
    } else {
        console.log('ERROR: Ingrese dos números diferentes y mayores a cero.')
    }
}

function rangoEtario() {
    edad = document.getElementById('edad').value
    edad = parseInt(edad)

    if (typeof edad === 'number' && !isNaN(edad)) {
        
        if (edad > 0) {
            
            if (edad < 18) {
                console.log('Persona es menor de edad!')
            }
            else if (edad < 65) {
                console.log('Persona es adulto!')
            }
            else if (edad < 85) {
                console.log('Persona es adulto mayor!')
            }
            else {
                console.log('Persona es de años dorados!')
            }

        } else {
            console.log('Ingrese edad valida')
        }

    } else {
        console.log('ERROR: El valor ingresado no es un número')
    }
}