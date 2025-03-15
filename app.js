// Armazenar os nomes dos amigos
let amigos = [];

// função para adicionar um amigo
function adicionarAmigo() {
    const inputAmigos = document.getElementById('amigo');
    const nomesDosAmigos = inputAmigos.value.trim();

    // validar que o campo não está vazio
    if (nomesDosAmigos === "") {
        alert("Por favor, inserir um nome!");
        return;
    }

    // validar que o nome não está duplicado
    if (amigos.includes(nomesDosAmigos)) {
        alert(`${nomesDosAmigos} já está na lista!`);
        return;
    }

    // adicionar o nome na lista de amigos
    amigos.push(nomesDosAmigos);

    // Limpar campo de entrada
    inputAmigos.value = "";

    // Atualizar a lista na interface
    atualizarLista();
}

// função para atulizar a lista de amigos na interface
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpar o conteudo atual da lista
    listaAmigos.innerHTML = ""; // excluir qualquer conteúdo anterior dentro do conteúdo da lista

    // Percorrer a matriz com um loop for
    for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}