const pessoa1 = {
    nome: 'Clovis',
    sobrenome: 'Borges',
    idade: 21,

    fala() {
        console.log(`${this.nome}, ${this.idade} years old, is saying hi...`);
    },

    incrementaIdade() {
        this.idade++;
    },
};

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()


// console.log(pessoa1.nome);

// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome,
//         sobrenome,
//         idade,
//     };
// }

// const pessoa1 = criaPessoa('Clovis', 'Borges', 21)