getDateHR = () => {
    const hora = document.getElementById('hora')
    const data = new Date()
    const teste = {weekday: 'long', year: 'numeric', month: 'long', day:
    'numeric', hour: 'numeric', minute: 'numeric', second:'numeric' }
    hora.innerHTML = data.toLocaleDateString('pt-BR', teste)
    return hora
}
getDateHR()