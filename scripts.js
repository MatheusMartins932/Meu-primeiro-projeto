const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []


function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas() {

    let novaLi = ''

    minhaListaDeItens.forEach((item, posicao) => {

        novaLi = novaLi + ` 
    
    <li class="tasks ${item.concluida && "done"}">
    <img src="./img/confere.jpg" alt="confere na tarefa" onclick="concluirtarefa (${posicao})">
    <p>${item.tarefa}</p>
    <img src="./img/lixeira.png" alt="tarefa-para-lixeira" onclick="deletarItem (${posicao})">
    </li> 
    
    `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

}



function concluirtarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

    mostrarTarefas()
}


function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao, 1)

    mostrarTarefas()
}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if (tarefasDoLocalStorage) {
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }

    mostrarTarefas()


}

recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)
