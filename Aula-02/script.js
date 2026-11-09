function Adicionar_Tarefa(){
    // Adiciona o texto do input em uma variável:
    let Input_Tarefa = document.getElementById("input_tarefa")
    // Adiciona a variável com o texto do input em uma outra variável:
    let Tarefa = Input_Tarefa.value

    // Adiciona a lista de tarefas (ul) em uma variável:
    let Lista_Tarefas = document.getElementById("lista_tarefas")
    // Cria um novo elemento de lista (li) à lista de tarefas (ul):
    let Nova_Tarefa = document.createElement("li")
    // Atribui o texto do input do input à variável criada:
    Nova_Tarefa.textContent = Tarefa
    // Adiciona a nova tarefa em um novo elemento de lista:
    Lista_Tarefas.appendChild(Nova_Tarefa)
    
    // Apaga o input
    Input_Tarefa.value = ""
}