const botao1 = document.querySelector(".enviar1")

const escreveValor = (seletor, valor) => {
    const para = document.createElement("p")
    const nodeConteudo = document.createTextNode(valor)
    para.appendChild(nodeConteudo)
    document.querySelector(seletor).appendChild(para)
}

const sequenciaFibonacci = () => {
    let resp = ""
    let fibo = []
    fibo [0] = 0
    fibo [1] = 1
    for(let i = 2; i <= 100; i++)
        fibo [i] = fibo[i-2] + fibo[i-1]
    for(let j = 0; j <= 100; j++)
        escreveValor("#resp1", `O elemento ${j} da Sequênica de Fibonacci é igual a ${fibo[j]} `)

    
}

botao1.addEventListener("click", () => {
    document.querySelector("#resp1").textContent = "" //Limpar tela 
    sequenciaFibonacci()
})