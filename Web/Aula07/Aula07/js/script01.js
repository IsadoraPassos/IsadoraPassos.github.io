const botao1 = document.querySelector(".executa01")

const obtemValor = seletor => {
    const val = document.querySelector(seletor)
    let num = isNaN(parseFloat(val.value))? 0:parseFloat(val.value)
    val.value = ""
    return num
}
 
const escreveValor = (seletor, valor) => {
    const nodeConteudo = document.createTextNode(valor)
    document.querySelector(seletor).textContent = ""
    document.querySelector(seletor).appendChild(nodeConteudo)
}

//atividade 01 
const somar = (num1, num2) => num1 + num2

botao1.addEventListener("click", () => {
    const num1 = obtemValor("#questao01-val01")
    const num2 = obtemValor("#questao01-val02")
    escreveValor("#resp01", somar(num1, num2))
})

//atividade 02
 const botao2 = document.querySelector(".executa02")

const identificaMaiorNum = (num1, num2) => {
    let resp = ""
    if(num1>num2)
        resp = `O número ${num1} é maior que ${num2}`
    else if(num2>num1)
        resp = `O número ${num2} é maior que ${num1}`
    else
        resp = `Os números são iguais`
    return resp
}

botao2.addEventListener("click", () => {
    const num1 = obtemValor("#questao02-val01")
    const num2 = obtemValor("#questao02-val02")
    escreveValor("#resp02", identificaMaiorNum(num1, num2))
})

//atividade 03
const botao3 = document.querySelector(".executa03")

const numeroPrimo = (num) => {
    let resp = ""
    let divisao = 0
    for(let aux = 1; num >= aux; aux++){
        if(num % aux == 0) 
            divisao++
    }

    if(divisao == 2)
        resp = `O número ${num} é primo`
    else
        resp = `O número ${num} não é primo`
    
    return resp
}

botao3.addEventListener("click", () => {
    const num = obtemValor("#questao03-val01")
    escreveValor("#resp03", numeroPrimo(num))
})

//atividade 04
const botao4 = document.querySelector(".executa04")

const calcularHipotenusa = (num1, num2) => {
    let resp = ""
    const hipo = Math.sqrt((num1**2)+(num2**2))
    resp = `A hipotenusa desse trângulo é igual a ${hipo}`
    return resp
}

botao4.addEventListener("click", () => {
    const num1 = obtemValor("#questao04-val01")
    const num2 = obtemValor("#questao04-val02")
    escreveValor("#resp04", calcularHipotenusa(num1, num2))
})

//atividade 05
const botao5 = document.querySelector(".executa05")

const calcularReajuste = (salario, reajuste) => {
    let resp = ""
    salario *= 1 + reajuste / 100
    resp = `O sálario após o reajuste será ${salario}`
    return resp 
}

botao5.addEventListener("click", () => {
    const num1 = obtemValor("#questao05-val01")
    const num2 = obtemValor("#questao05-val02")
    escreveValor("#resp05", calcularReajuste(num1, num2))
})

//atividade 06
const botao6 = document.querySelector(".executa06")

const custoDoCarro = (num) => {
    let resp = ""
    num += (num*0.28) + (num*0.45)
    resp = `O custo final do carro é de ${num} reais`
    return resp
} 

botao6.addEventListener("click", () => {
    const num = obtemValor("#questao06-val01")
    escreveValor("#resp06", custoDoCarro(num))
})

//atividade 07
const botao7 = document.querySelector(".executa07")

const salarioFinal = (NumeroDeCarrosVendidos, ValorDeVendas, Salario, ValorPorCarro) => {
    let resp = ""
    let SalarioFinal = Salario + (ValorDeVendas * 0.05) + (NumeroDeCarrosVendidos * ValorPorCarro)
    resp = `O sálario final do vendedor será de ${SalarioFinal} reais`
    return resp
}

botao7.addEventListener("click", () => {
    const num1 = obtemValor("#questao07-val01")
    const num2 = obtemValor("#questao07-val02")
    const num3 = obtemValor("#questao07-val03")
    const num4 = obtemValor("#questao07-val04")
    escreveValor("#resp07", salarioFinal(num1, num2, num3, num4))
})

//atividade 08
const botao8 = document.querySelector(".executa08")

const FahrenheitParaCelsius = (num) => {
    let resp = ""
    let temperatura = ((num - 32)*5) / 9
    resp = `${num} graus Fahrenheit corresponde a ${temperatura} graus Celsius`
    return resp
}

botao8.addEventListener("click", () => {
    const num = obtemValor("#questao08-val01")
    escreveValor("#resp08", FahrenheitParaCelsius(num))
})

//atividade 09
const botao9 = document.querySelector(".executa09")

const media = (num1, num2, num3) => {
    let resp = ""
    let media = (num1 * 2 + num2 * 3 + num3 * 5) / 10
    resp = `A media final do aluno é ${media}`
    return resp
}

botao9.addEventListener("click", () => {
    const num1 = obtemValor("#questao09-val01")
    const num2 = obtemValor("#questao09-val02")
    const num3 = obtemValor("#questao09-val03")
    escreveValor("#resp09", media(num1, num2, num3))
})

//atividade 10
const botao10 = document.querySelector(".executa10")

const valorDasMacas = (num) => {
    let resp = ""
    let valor = 0
    if(num < 0)
        valor = `Valor inválido`
    else if(num < 12)
        valor = num * 1.30
    else
        valor = num 
    resp = `O custa total dessa compra é de ${valor} reais` 
    return resp
}

botao10.addEventListener("click", () => {
    const num = obtemValor("#questao10-val01")
    escreveValor("#resp10", valorDasMacas(num))
})