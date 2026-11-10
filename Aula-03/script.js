function Adicionar_Tarefa(){
    // Adiciona o texto do input em uma variável:
    const Input_Tarefa = document.getElementById("input_tarefa")
    // Adiciona a variável com o texto do input em uma outra variável:
    let Tarefa = Input_Tarefa.value.trim()
    const mensagem = document.getElementById("msg")

    if (Tarefa == "") {
        mensagem.textContent = "O campo não pode estar vazio!"
        mensagem.style.color = "#C30000"
        document.getElementById("input_tarefa").style.borderColor = "#C30000"
    }
    else {
        mensagem.textContent = "Tarefa adicionada!"
        mensagem.style.color = "#00AA20"
        // Adiciona a lista de tarefas (ul) em uma variável:
        const Lista_Tarefas = document.getElementById("lista_tarefas")
        // Cria um novo elemento de lista (li) à lista de tarefas (ul):
        let Nova_Tarefa = document.createElement("li")
        Nova_Tarefa.textContent = Tarefa
        Lista_Tarefas.appendChild(Nova_Tarefa)
    }

    // Apaga o texto do input
    Input_Tarefa.value = ""
}
