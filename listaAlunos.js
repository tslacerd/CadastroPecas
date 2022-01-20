let numeroAlunos = 30;

let listaAlunos = ["Joana", "Frederico", "Fernando", "Lucas", "Marcos"];

for(let index = 0; index <= listaAlunos.length; index++) {
    //console.log (index)

    if(index == 0){
        console.log((index + 1) + ": Zero" + listaAlunos [index]);//concatenar
    }else if (index % 2 == 1){
        console.log (`${index} : Ímpar :${listaAlunos[index]}`);//interpolação
    }else {
        console.log(`${index} : Par :${listaAlunos[index]}`)
           }
    }