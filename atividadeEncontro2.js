console.log ("BEM VINDO! QUAL O DIA DO EVENTO?")

let diaatual = 10
let diadigitado = 15
///usuário digitará o dia do evento desejado

if (diadigitado > diaatual){
    console.log ("QUAL A SUA IDADE?") 
}
else {
    console.log ("CADASTRO NÃO PERMITIDO, DATA INVÁLIDA")
}

let idade = 22 
///usuário digitará sua idade

if (idade >= 18 && diadigitado > diaatual ) {
    console.log ("CADASTRO DE PARTICIPANTE, ESCOLHA SEU EVENTO, PALESTRA 1 OU 2?")
}

if (idade <= 17) {
        console.log ("CADASTRO NÃO PERMITIDO, IDADE MÍNIMA NÃO ATINGIDA")
}
    
let palestra1 = 0
/// usuario digitará 1 para palestra 1

let palestra2 = 2
/// usuario digitará 2 para palestra 2

let participantes1 = 100
/// quantidade de participantes para a palestra 1

let participantes2 = 80
/// quantidade de participantes para a palestra 2

if (palestra1 == 1 && participantes1 <= 100) {
    console.log ("CADASTRO PALESTRA 1")
}

if (palestra2 == 2 && participantes2 <= 100) {
    console.log ("CADASTRO PALESTRA 2")
}

if (palestra1 == 1 && participantes1 >= 100 || palestra2 == 2 && participantes2 >= 100) {
    console.log ("CADASTRO NÃO PERMITIDO, LIMITE DE PARTICIPANTES EXCEDIDO")
}

console.log ("FIM")