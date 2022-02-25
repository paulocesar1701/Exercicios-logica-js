function salario(valor_hora = 0, horas = 0) {
    let salario
    console.log("Digite quanto você ganha por hora:")
    console.log("Digite quantas horas você trabalha no mês:")
    salario = horas * valor_hora
    console.log("Seu salário no mês é:R$", salario, "reais")
}

salario(15,176)