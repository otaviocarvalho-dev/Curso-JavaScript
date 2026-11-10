let Tarefas = []

function Adicionar_Tarefa(){
    const Input_Tarefa = document.getElementById("input_tarefa")
    let Tarefa = Input_Tarefa.value.trim()
    const mensagem = document.getElementById("msg")

    if (Tarefa == "") {
        mensagem.textContent = "O campo não pode estar vazio!"
        mensagem.style.color = "#C30000"
        document.getElementById("input_tarefa").style.borderColor = "#C30000"
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

function Renderizar_Tarefas(){
    const Lista_Tarefas = document.getElementById("lista_tarefas")
    Lista_Tarefas.innerHTML = ""
    let i = 0
    for (i; i < Tarefas.length; i++){
        let Nova_Tarefa = document.createElement("li")
        Nova_Tarefa.textContent = Tarefas[i]
        Lista_Tarefas.appendChild(Nova_Tarefa)
    }
}
