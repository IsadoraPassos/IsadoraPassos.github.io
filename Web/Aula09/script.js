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

let opinioes = opinioes => {
    const p = document.createElement("p")
    opinioes.forEach(op => {
        p.innerHTML += `Rating: ${op.rating}. Descrição: ${op.descricao}<br>`
    })
    return p.innerHTML

}

let semelhantes = (titulo, filmes) => {
    const p = document.createElement("p")
    
    titulo.forEach(t => {
        
        p.innerHTML += `<a href="#filme-${t}"> </a>`
    })
    return p.innerHTML
}

let criaBanner = (filme) => {
    let filmeDiv = document.createElement("div")
    filmeDiv.classList.add("filme")
    filmeDiv.innerHTML += `<img src="${filme.figura}" alt="${filme.titulo}" class="imagens">
                        <div class="texto">
                        <h2 id="filme-${filme.id}">${filme.titulo}</h2>
                        <p class="caixaClassificacao faixa-${filme.classificacao}">${filme.classificacao}</p>
                        <div class="conteudo">
                        <p>Gêneros: ${filme.generos}</p>
                        <p>Elenco: ${filme.elenco}</p>
                        <p>Resumo: ${filme.resumo}</p>
                        <p class="opinioes">Opiniões:<br> ${opinioes(filme.opinioes)}</p>
                        <p>Titulos Semelhantes: ${semelhantes(filme.titulosSemelhantes, filme)}</p>
                        </div>
                        </div>
                        `
    return filmeDiv
}

