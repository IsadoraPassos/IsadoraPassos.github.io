const botao1 = document.querySelector(".enviar1")

const escreveValor = (seletor, valor) => {
    const para = document.createElement("p")
    const nodeConteudo = document.createTextNode(valor)
    para.appendChild(nodeConteudo)
    document.querySelector(seletor).appendChild(para)
}

const ImprimirNumerosPrimos = () => {
    let n = 0
    for(let num = 1; num <= 1000; num++){
        let divisao = 0
        for(let aux = 1; num >= aux; aux++){
            if(num % aux == 0) 
                divisao++
        }
        if(divisao == 2)
            escreveValor("#resp1", `${num}`)
        
    }
}

botao1.addEventListener("click", () => {
    escreveValor("#resp1", `Números Primos: `)
    ImprimirNumerosPrimos()
})