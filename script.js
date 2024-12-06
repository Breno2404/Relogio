setInterval (mostraHora, 1000)

function mostraHora() {
    const dataAtual = new Date()
    const horaAtual = dataAtual.getHours()
    const minutoAtual = dataAtual.getMinutes()
    const segundoAtual = dataAtual.getSeconds()
    console.log (`${horaAtual}:${minutoAtual}:${segundoAtual}`)
}