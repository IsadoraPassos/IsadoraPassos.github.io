const botao1 = document.querySelector(".enviar1")

const escreveValor = (seletor, valor) => {
    const nodeConteudo = document.createTextNode(valor)
    document.querySelector(seletor).appendChild(nodeConteudo)
}

const imprimirSomaDePares = () => {
    let resp = ""
    let soma = 0
    for(let i = 1; i <= 1000; i++)
        if(i % 2 == 0)
            soma += i
    resp = `A soma dos números pares positivos até 1000 é ${soma}`
    return resp
}

botao1.addEventListener("click", () => {
    escreveValor("#resp1", imprimirSomaDePares())
})

