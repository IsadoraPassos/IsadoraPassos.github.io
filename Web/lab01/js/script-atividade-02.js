const botao1 = document.querySelector(".enviar1")

const escreveValor = (seletor, valor) => {
    const para = document.createElement("p")
    const nodeConteudo = document.createTextNode(valor)
    para.appendChild(nodeConteudo)
    document.querySelector(seletor).appendChild(para)
}

const imprimirPotenciasDeQuatro = () => {
    let resp = ""
    let aux = 1
    for(let i = 1; i <= 30; i++){
        escreveValor("#resp1", `4 elevado a ${i} = ${aux}`)
        aux = 4**i
    }
}

botao1.addEventListener("click", () => {
    imprimirPotenciasDeQuatro()
})