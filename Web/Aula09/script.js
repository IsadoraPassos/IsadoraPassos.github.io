
const conteudo = document.querySelector("#content")

let criaBanner = (filme) => {
    let filmeDiv = document.createElement("div")
    filmeDiv.classList.add("filme")
    filmeDiv.innerHTML += `<img src="${filme.figura}" alt="${filme.titulo}">
                        <div class="texto">
                        <h2>${filme.titulo}</h2>
                        <div class="caixaClassificacao faixa-${filme.classificacao}"><p>${filme.classificacao}</p></div>
                        </div>
                        `
    return filmeDiv
}




filmes.forEach(filmes => {
    conteudo.appendChild(criaBanner(filmes))
    
})

let caixa = document.querySelector('.caixaClassificacao')
caixa.classList.add('Preto')

console.log(filmes)