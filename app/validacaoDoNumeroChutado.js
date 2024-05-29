function verificaSeENumero(chute) {
    // debugger
    const numeroChutadoValidado = +chute
    if (chuteForInvalido(numeroChutadoValidado)) {
        elementoChute.innerHTML += `<div>Valor inválido!</div> <button id="botao-retry" class="botao-retry">Retry <i class="fa-solid fa-rotate-right"></i></button></div>`
        return
    }  

    if (numeroForMaiorOuMenorQueOValorPermitido(numeroChutadoValidado)) {
        elementoChute.innerHTML += `<div>Valor inválido! Valor precisa estar entre ${menorValor} e ${maiorValor}!</div></div>`
        return
    }   

    if (chute == numeroSecreto) {
        document.body.innerHTML = `<h2>Parabéns! Você acertou o número secreto!</h2><button id="botao-retry" class="botao-retry">Retry <i class="fa-solid fa-rotate-right"></i></button></div>`
    } else if (chute < numeroSecreto) {
        elementoChute.innerHTML += `<h3>O número secreto é maior <i class="fa-solid fa-up-long"></i></h3></div>`
    } else {
        elementoChute.innerHTML += `<h3>O número secreto é menor <i class="fa-solid fa-down-long"></i></h3></div>`
    }
}

function chuteForInvalido(numeroChutadoValidado) {
    return Number.isNaN(numeroChutadoValidado)
}

function numeroForMaiorOuMenorQueOValorPermitido(numeroChutadoValidado) {
    return numeroChutadoValidado > maiorValor || numeroChutadoValidado < menorValor
}

document.body.addEventListener('click', elemento => {
    if(elemento.target.id == 'botao-retry') {
        window.location.reload()
    }

})
