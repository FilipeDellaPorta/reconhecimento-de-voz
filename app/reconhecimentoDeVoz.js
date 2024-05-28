window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const elementoChute = document.getElementById('chute')

const recognition = new SpeechRecognition()
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(evento) {
    chute = evento.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeENumero(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div class="linha-de-resposta">
    <div>Você disse:</div>
        <span class="area-de-resposta">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())
