const dados = document.querySelectorAll('.dado-jogo')
const btnRolarDados = document.querySelector('#btn-rolar-dados')
const dadoValor1 = './images/dado-1.png'
const dadoValor2 = './images/dado-2.png'
const dadoValor3 = './images/dado-3.png'
const dadoValor4 = './images/dado-4.png'
const dadoValor5 = './images/dado-5.png'
const dadoValor6 = './images/dado-6.png'
const gifDadoRolando = './images/rolling-dice.gif'
const elementoRolagensRestantes = document.querySelector('#rolagens-restantes')
let rolagensRestantes = 3
let valorDosDados = []

// campos do jogo
const campoUm = document.getElementById('td-um')
const campoDois = document.getElementById('td-dois')
const campoTres = document.getElementById('td-tres')
const campoQuatro = document.getElementById('td-quatro')
const campoCinco = document.getElementById('td-cinco')
const campoSeis = document.getElementById('td-seis')
const campoTrinca = document.getElementById('td-trinca')
const campoQuadra = document.getElementById('td-quadra')
const campoFullhouse = document.getElementById('td-fullhouse')
const campoSequenciaMinima = document.getElementById('td-seq-min')
const campoSequenciaMaxima = document.getElementById('td-seq-max')
const campoYahtzee = document.getElementById('td-yahtzee')
const campoChance = document.getElementById('td-chance')


btnRolarDados.addEventListener('click', () => {
    let aux1 = 0
    dados.forEach(dado => {
        if (!dados[aux1].classList.contains('selecionado')) {
            dados[aux1].classList.add('rolando')
            btnRolarDados.classList.add('inactive')
            dados[aux1].setAttribute('src', gifDadoRolando)
        } else {
            dados[aux1].classList.add('noclick')
        }
        aux1++
    });
    function rolarDados() {
        let aux = 0
        dados.forEach(dado => {
            dados[aux].classList.remove('noclick')
            if (!dados[aux].classList.contains('selecionado')) {
                dados[aux].classList.remove('rolando')
                if (rolagensRestantes != 0) {
                    btnRolarDados.classList.remove('inactive')
                }

                dado = Math.floor(Math.random() * 6) + 1
                valorDosDados[aux] = dado
                console.log(`Valor do dado ${aux + 1} => ${dado}`)
                if (dado == 1) {
                    dados[aux].setAttribute('src', dadoValor1)
                } else if (dado == 2) {
                    dados[aux].setAttribute('src', dadoValor2)
                } else if (dado == 3) {
                    dados[aux].setAttribute('src', dadoValor3)
                } else if (dado == 4) {
                    dados[aux].setAttribute('src', dadoValor4)
                } else if (dado == 5) {
                    dados[aux].setAttribute('src', dadoValor5)
                } else {
                    dados[aux].setAttribute('src', dadoValor6)
                }
            }
            aux++
        });
        console.log('Fim da rolagem')

        // calcular resultados
        calcularUm(valorDosDados)
        calcularDois(valorDosDados)
        calcularTres(valorDosDados)
        calcularQuatro(valorDosDados)
        calcularCinco(valorDosDados)
        calcularSeis(valorDosDados)
        calcularTrinca(valorDosDados)
        calcularQuadra(valorDosDados)
        calcularFullhouse(valorDosDados)
        calcularSequenciaMinima(valorDosDados)
        calcularSequenciaMaxima(valorDosDados)
        calcularYahtzee(valorDosDados)
        calcularChance(valorDosDados)

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



function calcularUm(dadosValor) {
    let somaUm = 0
    dadosValor.forEach(dado => {

        if (dado == 1) {
            somaUm++
        }
    });
    campoUm.textContent = somaUm
}
function calcularDois(dadosValor) {
    let somaDois = 0
    dadosValor.forEach(dado => {

        if (dado == 2) {
            somaDois += 2
        }
    });
    campoDois.textContent = somaDois
}
function calcularTres(dadosValor) {
    let somaTres = 0
    dadosValor.forEach(dado => {

        if (dado == 3) {
            somaTres += 3
        }
    });
    campoTres.textContent = somaTres
}
function calcularQuatro(dadosValor) {
    let somaQuatro = 0
    dadosValor.forEach(dado => {

        if (dado == 4) {
            somaQuatro += 4
        }
    });
    campoQuatro.textContent = somaQuatro
}
function calcularCinco(dadosValor) {
    let somaCinco = 0
    dadosValor.forEach(dado => {

        if (dado == 5) {
            somaCinco += 5
        }
    });
    campoCinco.textContent = somaCinco
}
function calcularSeis(dadosValor) {
    let somaSeis = 0
    dadosValor.forEach(dado => {

        if (dado == 6) {
            somaSeis += 6
        }
    });
    campoSeis.textContent = somaSeis
}

function calcularTrinca(dadosValor) {
    let valorTrinca = 0
    if (campoUm.textContent >= 3) {
        for (let index = 0; index < dadosValor.length; index++) {
            valorTrinca += dadosValor[index]

        }
    } else if (campoDois.textContent >= 6) {
        for (let index = 0; index < dadosValor.length; index++) {
            valorTrinca += dadosValor[index]

        }
    }
    else if (campoTres.textContent >= 9) {
        for (let index = 0; index < dadosValor.length; index++) {
            valorTrinca += dadosValor[index]

        }
    }
    else if (campoQuatro.textContent >= 12) {
        for (let index = 0; index < dadosValor.length; index++) {
            valorTrinca += dadosValor[index]

        }
    }
    else if (campoCinco.textContent >= 15) {
        for (let index = 0; index < dadosValor.length; index++) {
            valorTrinca += dadosValor[index]

        }
    } else if (campoSeis.textContent >= 18) {
        for (let index = 0; index < dadosValor.length; index++) {
            valorTrinca += dadosValor[index]
        }

    }
    campoTrinca.textContent = valorTrinca
}

function calcularQuadra(dadosValor) {
    let valorQuadra = 0
    if (campoUm.textContent >= 4) {
        for (let index = 0; index < dadosValor.length; index++) {
            valorQuadra += dadosValor[index]

        }
    } else if (campoDois.textContent >= 8) {
        for (let index = 0; index < dadosValor.length; index++) {
            valorQuadra += dadosValor[index]

        }
    }
    else if (campoTres.textContent >= 12) {
        for (let index = 0; index < dadosValor.length; index++) {
            valorQuadra += dadosValor[index]

        }
    }
    else if (campoQuatro.textContent >= 16) {
        for (let index = 0; index < dadosValor.length; index++) {
            valorQuadra += dadosValor[index]

        }
    }
    else if (campoCinco.textContent >= 20) {
        for (let index = 0; index < dadosValor.length; index++) {
            valorQuadra += dadosValor[index]

        }
    } else if (campoSeis.textContent >= 24) {
        for (let index = 0; index < dadosValor.length; index++) {
            valorQuadra += dadosValor[index]
        }

    }
    campoQuadra.textContent = valorQuadra
}

function calcularFullhouse(dadosValor) {
    let fullhouse = 0
    const contagem = {}
    for (const dado of dadosValor) {
        if (contagem[dado]) {
            contagem[dado]++;
        } else {
            contagem[dado] = 1;
        }
    }
    if (Object.values(contagem).includes(2) && Object.values(contagem).includes(3)) {
        fullhouse = 25
    }
    campoFullhouse.textContent = fullhouse
}

function calcularSequenciaMinima(dadosValor) {
    const dadosOrdenados = dadosValor.slice().sort((a, b) => a - b);
    let sequenciaMinima = false

    let maiorSequenciaConsecutiva = 1;
    let sequenciaAtual = 1;

    for (let i = 1; i < dadosOrdenados.length; i++) {
        if (dadosOrdenados[i] === dadosOrdenados[i - 1] + 1) {
            sequenciaAtual++;
            if (sequenciaAtual > maiorSequenciaConsecutiva) {
                maiorSequenciaConsecutiva = sequenciaAtual;
            }
        } else {
            sequenciaAtual = 1;
        }
    }

    if (maiorSequenciaConsecutiva >= 4) {
        sequenciaMinima = true
    }
    campoSequenciaMinima.textContent = sequenciaMinima ? 30 : 0;
}

function calcularSequenciaMaxima(dadosValor) {
    let sequenciaMaxima = true;

    const dadosEmSequencia = dadosValor.slice().sort((a, b) => a - b);

    for (let i = 0; i < dadosEmSequencia.length - 1; i++) {
        if (dadosEmSequencia[i] + 1 !== dadosEmSequencia[i + 1]) {
            sequenciaMaxima = false;
            break;
        }
    }

    console.log(sequenciaMaxima)
    campoSequenciaMaxima.textContent = sequenciaMaxima ? 40 : 0;
}


function calcularChance(dadosValor) {
    let chance = 0
    for (let index = 0; index < dadosValor.length; index++) {
        chance += dadosValor[index]
    }
    campoChance.textContent = chance
}

function calcularYahtzee(dadosValor) {
    let yahtzee = 0
    const primeiroDado = dadosValor[0];
    if (dadosValor.every(dado => dado === primeiroDado)) {
        yahtzee = 50
    }

    campoYahtzee.textContent = yahtzee
}
