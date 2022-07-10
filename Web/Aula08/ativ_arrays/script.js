
const escreveValor = (seletor, valor) => {
    const nodeConteudo = document.createTextNode(valor)
    document.querySelector(seletor).textContent = ""
    document.querySelector(seletor).appendChild(nodeConteudo)
}

//atividade 1
const sum = (numeros = []) => {
    let valor = numeros.reduce(function(soma, numero){
        return soma + numero
        
    }, 0)
    return valor
}

const sumOdds = (numeros = []) => {
    let valor = numeros.reduce(function(soma, numero){
        soma += (numero % 2 == 0)? 0 : numero
        return soma
    }, 0)
    return valor
}

const product = (numeros = []) => {
    let valor = numeros.reduce(function(produto, numero){
        return produto * numero
    }, 1)
    return valor
}

const botao1 = document.querySelector(".executa1")

botao1.addEventListener("click", () => {
    let arraySum1 = [1,2,3]
    let arraySum2 = [2,2,2]
    let arraySum3 = [1,2,3,4,5,6]
    let arraySumOdds1 = [1,2,3]
    let arraySumOdds2 = [2,2,2]
    let arraySumOdds3 = [1,2,3,4,5,6]
    let arrayProduct1 = [1,2,3]
    let arrayProduct2 = [2,2,2]
    let arrayProduct3 = [1,2,3,4,5,6]
    escreveValor("#resp1-1", sum(arraySum1))
    escreveValor("#resp1-2", sum(arraySum2))
    escreveValor("#resp1-3", sum(arraySum3))
    escreveValor("#resp1-4", sumOdds(arraySumOdds1))
    escreveValor("#resp1-5", sumOdds(arraySumOdds2))
    escreveValor("#resp1-6", sumOdds(arraySumOdds3))
    escreveValor("#resp1-7", product(arrayProduct1))
    escreveValor("#resp1-8", product(arrayProduct2))
    escreveValor("#resp1-9", product(arrayProduct3))
})

//atividade 2
const botao2 = document.querySelector(".executa2")

const numeroPrimo = (num) => {
    let divisao = 0
    for(let aux = 1; num >= aux; aux++){
        if(num % aux == 0) 
            divisao++
    }
    if(divisao == 2)
        return true
    else
        return false
}

const numerosPrimos = (n, no) => {
    let np = []
    let j = 0
    if(no == undefined){
        no = 0
        for(i = 1; j <= n - 1; i++){
            if(numeroPrimo(i)){ 
                np[j] = i
                j++
            }            
        }
        return np
    }
    else {
        for(i = n; i <= no -1; i++){
            if(numeroPrimo(i)){
                np[j] = i
                j++
            }
        }
        return np
    }
}

botao2.addEventListener("click", () => {
    escreveValor("#resp2-1", numerosPrimos(4))
    escreveValor("#resp2-2", numerosPrimos(6))
    escreveValor("#resp2-3", numerosPrimos(2,10))
    escreveValor("#resp2-4", numerosPrimos(2,20))
    escreveValor("#resp2-5", numerosPrimos(10,2))
})

//atividade 3
const botao3 = document.querySelector(".executa3")

function decimalParaRomano(numero) {
    let resp = '';
    let romanos = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    for (var x = 0; x < romanos.length; x++) {
        while (numero >= decimal[x]) {
          resp += romanos[x];
          numero -= decimal[x];
        }
      }
      return resp;
}

botao3.addEventListener("click", () => {
    escreveValor("#resp3-1", decimalParaRomano(3))
    escreveValor("#resp3-2", decimalParaRomano(6))
    escreveValor("#resp3-3", decimalParaRomano(9))
    escreveValor("#resp3-4", decimalParaRomano(48))
    escreveValor("#resp3-5", decimalParaRomano(59))
    escreveValor("#resp3-6", decimalParaRomano(93))
    escreveValor("#resp3-7", decimalParaRomano(575))
})

//atividade 4
const botao4 = document.querySelector(".executa4")

const saqueMinimo = (valor) => {
    const notas = [100,50,20,10,5,2]
    
    let divisao = notas.map(function(numero){
        let div = Math.floor(valor / numero)
        valor -= div * numero
        return div 
    })
    
    return divisao
    
}

botao4.addEventListener("click", () => {
    escreveValor("#resp4-1", saqueMinimo(1280)[0])
    escreveValor("#resp4-2", saqueMinimo(1280)[1])
    escreveValor("#resp4-3", saqueMinimo(1280)[2])
    escreveValor("#resp4-4", saqueMinimo(1280)[3])
    escreveValor("#resp4-5", saqueMinimo(5705)[0])
    escreveValor("#resp4-6", saqueMinimo(5705)[4])
    escreveValor("#resp4-7", saqueMinimo(892)[0])
    escreveValor("#resp4-8", saqueMinimo(892)[1])
    escreveValor("#resp4-9", saqueMinimo(892)[2])
    escreveValor("#resp4-10", saqueMinimo(892)[5])
})