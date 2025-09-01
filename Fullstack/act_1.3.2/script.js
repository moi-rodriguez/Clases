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
