getDateHR = () => {
    const hora = document.getElementById('hora')
    const data = new Date()
    const opcao = {weekday: 'long', year: 'numeric', month: 'long', day:
    'numeric', hour: 'numeric', minute: 'numeric', second:'numeric' }
    hora.innerHTML = data.toLocaleDateString('pt-BR', opcao)
    return hora
}
getDateHR()
