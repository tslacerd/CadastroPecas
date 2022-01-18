// Atividade encontro remoto 1 - UC 8;

// Sistema de cadastro para controle de peças;

// Requisitos
// 1 – Se peça possuir um peso superior a 100 gramas, pode cadastrar;
// 2 - Lista com Capacidade inferior ou igual a 10 peças (console.log( “não tem capacidade”));
// 3 – Peça deve conter nome igual ou maior a 3 caracteres (console.log ("o cadastro deve possuir mais de 3 caracteres");

// ("Cadastro de peças")

let peso = 100;

if (peso >= 100) {
    console.log("A peça possui o peso adequado, pode ser cadastrada!")
} else {
    console.log("A peça não pode ser cadastrada, não possui o peso minimo") 
}

let listaPecas = ["Bateria","Bomba de arrefecimento","Bomba de Combustível", "Bomba de óleo","Câmbio","Conjunto de cabos e velas para ignição","Disco de Freio","Pinos Guia","Radiador"];

console.log("A minha primeira peça da lista é: " + listaPecas[0]);

let numeroPecas = listaPecas.length; 

if (numeroPecas < 10) {
    console.log("A lista ainda possui espaço disponível para cadastro de peças")  
} else {
    console.log("Não há mais espaço disponível para cadastro de peças, a lista já atingiu a capacidade máxima")
}

let nomePeca = listaPecas[0];

if (nomePeca.length > 3) {
    console.log("O nome de peça é válido, pode seguir com o cadastro.")  
} else {
    console.log("O nome da peça é inválido, o nome deve ter mais de 3 caracteres.")
}
//Entrega atividade 1  