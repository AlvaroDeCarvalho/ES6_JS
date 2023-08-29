class Aluno {
    #nota = 0;
    constructor(nomeDoAluno,notaDoAluno){
        this.nome = nomeDoAluno
        this.#nota = notaDoAluno
    }
    exibeNota(){
        return console.log(`O aluno(a) ${this.nome} tirou ${this.#nota}`)
    }
    setNota(notaDoAluno){
        this.#nota = notaDoAluno
    }
    getNota(){
        return this.#nota
    }
}
const arrayDeAlunos = []
const aluno = new Aluno('alvaro',10)
arrayDeAlunos.push(aluno)
const aluno2 = new Aluno('marcos',6)
arrayDeAlunos.push(aluno2)
const aluno3 = new Aluno('julia',7)
arrayDeAlunos.push(aluno3)
const aluno4 = new Aluno('matheus',1)
arrayDeAlunos.push(aluno4)

console.log(arrayDeAlunos)

const mediaAluno = (aluno) =>{
    return aluno.getNota() >= 7 
}

const alunosAprovados = arrayDeAlunos.filter(mediaAluno)

console.log("nota de todos os alunod")
for(let i =0 ; i< arrayDeAlunos.length; i++){
    console.log(`O aluno ${arrayDeAlunos[i].nome} tirou: ${arrayDeAlunos[i].getNota()}`)
}

console.log("alunos Aprovados: ")
for(let i =0 ; i< alunosAprovados.length; i++){
    console.log(`${alunosAprovados[i].nome}`)
}
