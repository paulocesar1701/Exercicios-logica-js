
function maiorNumero(num1 = 0, num2 = 0, num3 = 0) {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    num3 = parseFloat(num3)

    if (num1 > num2 && num1 > num3) {
        document.querySelector("#resultado").innerHTML = "O maior número é:" + num1
    }
    else if (num2 > num1 && num2 > num3) {
        document.querySelector("#resultado").innerHTML = "O maior número é:" + num2
    }
    else if (num3 > num1 && num3 > num2) {
        document.querySelector("#resultado").innerHTML = "O maior número é:" + num3
    }
}

