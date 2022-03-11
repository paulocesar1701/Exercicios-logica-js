function calcularSalario(){
    let salarioBruto, salarioLiquido, inss, sindicato, impostoRenda
    salarioBruto = document.querySelector("#salario_bruto").value
    salarioBruto = parseFloat(salarioBruto)
    inss = salarioBruto * 8 / 100
    sindicato = salarioBruto * 5/100
    impostoRenda = salarioBruto * 11/100
    salarioLiquido = salarioBruto - inss - sindicato - impostoRenda

    document.querySelector("#resultado").innerHTML += "Sálario Bruto:R$ " + salarioBruto
    document.querySelector("#resultado").innerHTML +="<br>"
    document.querySelector("#resultado").innerHTML += "Inss (8%): R$" + inss
    document.querySelector("#resultado").innerHTML +="<br>"
    document.querySelector("#resultado").innerHTML += "Sindicato (5%): R$" + sindicato
    document.querySelector("#resultado").innerHTML +="<br>"
    document.querySelector("#resultado").innerHTML += "Imposto de renda (11%): R$" + impostoRenda
    document.querySelector("#resultado").innerHTML +="<br>"
    document.querySelector("#resultado").innerHTML += "Sálario líquido:R$ " + salarioLiquido
    

}