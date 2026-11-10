let Tarefas = []

function Adicionar_Tarefa(){
const Input_Tarefa = document.getElementById("input_tarefa")
let Tarefa = Input_Tarefa.value.trim()
const mensagem = document.getElementById("msg")

if (Tarefa == "") {
    mensagem.textContent = "O campo não pode estar vazio!"
    mensagem.style.color = "#aa0000"
    document.getElementById("input_tarefa").style.borderColor = "#aa0000"
}
else {
    mensagem.textContent = "Tarefa adicionada!"
    mensagem.style.color = "#00aa20"
    document.getElementById("input_tarefa").style.borderColor = "#3c0000"
    Tarefas.push(Tarefa)
    Renderizar_Tarefas()
}

Input_Tarefa.value = ""
}

function Renderizar_Tarefas() {
    const Lista_Tarefas = document.getElementById("lista_tarefas")
    Lista_Tarefas.innerHTML = ""

    for (let i = 0; i < Tarefas.length; i++){
        let Nova_Tarefa = document.createElement("li")
        Nova_Tarefa.style.display = "flex"
        Nova_Tarefa.style.justifyContent = "space-between"
        Nova_Tarefa.style.alignItems = "center"
        Nova_Tarefa.textContent = Tarefas[i]

        let Botao_Editar = document.createElement("button")
        Botao_Editar.className = "editar"
        Botao_Editar.className = "botoes_tarefa"
        Botao_Editar.textContent = "Editar"
        Botao_Editar.onclick = () => Editar_Tarefa(i)

        let Botao_Excluir = document.createElement("button")
        Botao_Excluir.className = "excluir"
        Botao_Excluir.className = "botoes_tarefa"
        Botao_Excluir.textContent = "Excluir"
        Botao_Excluir.onclick = () => Remover_Tarefa(i)

        Nova_Tarefa.appendChild(Botao_Editar)
        Nova_Tarefa.appendChild(Botao_Excluir)
        Lista_Tarefas.appendChild(Nova_Tarefa)
    }
}

function Remover_Tarefa(i) {
    Tarefas.splice(i, 1)
    Renderizar_Tarefas()
}

function Editar_Tarefa(i) {
    let Tarefa_Editada = prompt("Edite a tarefa:")
    if (Tarefa_Editada.trim() !== "") {
        Tarefas[i] = Tarefa_Editada
        Renderizar_Tarefas()
        const mensagem = document.getElementById("msg")
        mensagem.textContent = "Uma tarefa foi editada!"
        mensagem.style.color = "#00aa20"
    }
    else {
        Editar_Tarefa(i)
    }
}

function Excluir_Tudo() {
    Tarefas.length = 0
    Renderizar_Tarefas()
    const mensagem = document.getElementById("msg")
    mensagem.textContent = "A lista está limpa!"
    mensagem.style.color = "#00aa20"
    document.getElementById("input_tarefa").style.borderColor = "#3c0000"
    Excluir_Tudo()
}
