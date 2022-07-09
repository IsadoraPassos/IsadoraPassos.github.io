const botao1 = document.querySelector(".enviar1")

const obterValor = seletor => {
    const val = document.querySelector(seletor)
    let num = isNaN(val.value)? 0:parseFloat(val.value)
    val.value = ""
    return num
}

const escreveValor = (seletor, valor) => {
    const nodeConteudo = document.createTextNode(valor)
    document.querySelector(seletor).textContent = ""
    document.querySelector(seletor).appendChild(nodeConteudo)
}

const fatorial = (numero) => {
    let fat;
    let valor = 1 
    if(numero == 1) 
        resp = `O fatorial do número ${numero} é igual a 1`
    else if (numero <= 0) 
        resp = `Valor Inválido`
    else
        for(let aux = 2; aux <= numero; aux++)
             valor = valor * aux
        resp = `O fatorial do número ${numero} é igual a ${valor}`
    return resp
}

botao1.addEventListener("click", () => {
    const numero = obterValor("#val1")
    escreveValor("#resp1", fatorial(numero))
})
