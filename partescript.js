function carregar() {
    var mensagem = window.document.getElementById('msg1')
    var logo = window.document.getElementById('fotodamanha')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `<strong>Agora são ${hora} horas</strong>`
    if (hora >= 0 && hora < 12) {
        logo.src = 'fotomanha.png'
        document.body.style.background = '#f5c064'
    } else if (hora >= 12 && hora < 18) {
        logo.src = 'fototarde.png'
        document.body.style.background = '#fdcf91'
    } else {
        logo.src = 'fotonoite.png'
        document.body.style.background = '#9fa0a4'
    }
}
