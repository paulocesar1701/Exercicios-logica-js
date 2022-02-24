let num1,num2,num3
num1 = 21
num2 = 19
num3 = 2
console.log("Digite o primeiro número")
console.log("Digite o segundo número")
console.log("Digite o segundo número")
if (num1 > num2 && num1 > num3){
    console.log("O primeiro número", num1, "é maior que os outros números", num2, num3)
}
if (num2 > num1 && num2 > num3) {
    console.log("O segundo número", num2, "é maior que os outros dois números", num1, num3)
}
if (num3 > num2 && num3 > num1){
    console.log("O terceiro número", num3, "é maior que os outros dois números", num1, num2)
}