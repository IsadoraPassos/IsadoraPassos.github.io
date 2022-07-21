const botao1 = document.querySelector(".enviar1")

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
    escreveValor("#resp1", fatorial(12))
})
