const url = "https://rafaelescalfoni.github.io/desenv_web/filmes.json"

if(self.fetch) {
    fetch(url) // recuperar o objeto response (resposta produzida)
        .then(resp => resp.json())
        .then(data =>{ carregaFilmes(data)})
        .catch( err =>{ console.log(`deu erro ${err.message}`)})

} else {

    const xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200)
        carregaFilmes(this.responseText)
    }
    xhttp.open("get", url, true)

    xhttp.send()

}



const carregaFilmes = catalogo => {
    const filmes = catalogo //JSON.parse(catalogo)
    const conteudo = document.querySelector("#content")
    filmes.forEach(filmes => {
        conteudo.appendChild(criaBanner(filmes))
    })  
}

let opinioes = (opinioes) => {
    opinioes.forEach(op => {
        let p = document.createElement("p")
        p.innerHTML += `${op}`
        return p
    })
}

let criaBanner = (filme) => {
    let filmeDiv = document.createElement("div")
    filmeDiv.classList.add("filme")
    filmeDiv.innerHTML += `<img src="${filme.figura}" alt="${filme.titulo}" class="imagens">
                        <div class="texto">
                        <h2>${filme.titulo}</h2>
                        <p class="caixaClassificacao faixa-${filme.classificacao}">${filme.classificacao}</p>
                        <div class="conteudo">
                        <p>Gêneros: ${filme.generos}</p>
                        <p>Elenco: ${filme.elenco}</p>
                        <p class="opinioes">Opiniões: ${opinioes(filme.opinioes)}</p>
                        <p>Resumo: ${filme.resumo}</p>
                        </div>
                        </div>
                        `
    return filmeDiv
}

