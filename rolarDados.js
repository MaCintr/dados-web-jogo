const dados = document.querySelectorAll('.dado-jogo')
const btnRolarDados = document.querySelector('#btn-rolar-dados')
const dadoValor1 = './images/dado-1.png'
const dadoValor2 = './images/dado-2.png'
const dadoValor3 = './images/dado-3.png'
const dadoValor4 = './images/dado-4.png'
const dadoValor5 = './images/dado-5.png'
const gifDadoRolando = './images/rolling-dice.gif'
const elementoRolagensRestantes = document.querySelector('#rolagens-restantes')
let rolagensRestantes = 3


btnRolarDados.addEventListener('click', () => {
    let aux1 = 0
    dados.forEach(dado => {
        if (!dados[aux1].classList.contains('selecionado')) {
            dados[aux1].classList.add('rolando')
            dados[aux1].setAttribute('src', gifDadoRolando)
        }
        aux1++
    });
    function rolarDados() {
        let aux = 0
        dados.forEach(dado => {
            if (!dados[aux].classList.contains('selecionado')) {
            dados[aux].classList.remove('rolando')
            dado = Math.floor(Math.random() * 6) + 1
            console.log(`Valor do dado ${aux + 1} => ${dado}`)
            if (dado == 1) {
                dados[aux].setAttribute('src', dadoValor1)
            } else if (dado == 2) {
                dados[aux].setAttribute('src', dadoValor2)
            } else if (dado == 3) {
                dados[aux].setAttribute('src', dadoValor3)
            } else if (dado == 4) {
                dados[aux].setAttribute('src', dadoValor4)
            } else {
                dados[aux].setAttribute('src', dadoValor5)
            }
        }
            aux++
        });
        console.log('Fim da rolagem')
    } setTimeout(rolarDados, 1000)
    rolagensRestantes--
    elementoRolagensRestantes.textContent = `(${rolagensRestantes})`
    if (rolagensRestantes == 0) {
        btnRolarDados.classList.add('inactive')
    }
})

dados.forEach(dado => {
    dado.addEventListener('click', (event) => {
        event.target.classList.toggle('selecionado');
    });
});

