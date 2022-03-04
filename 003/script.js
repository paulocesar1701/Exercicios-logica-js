function soma(num1 = 0, num2 = 0, s = 0) {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    s = num1 + num2
    document.querySelector("#resultado").innerHTML = "A soma dos dois números foi:" + s
}

