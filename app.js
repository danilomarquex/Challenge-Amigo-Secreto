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

    // Percorrer a lista com um loop for
    for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}

// função para selecionar amigo aleatório
function sortearAmigo() {

    // validar se tem amigos disponíveis
    if (amigos.length === 0) { //verificar se a lista amigos está vazia
        alert('Não há amigos disponíveis para sortear. Adicione pelo menos um!')
        return;
    }
    
    // gerar índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // gera um número aleatório entre 0 e o comprimento da lista menor

    // Obter o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio]; //Usar um índice aleatório para obter um nome aleatório na lista

    // mostrar o resultado em HTML
    const resultado =  document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado <strong> ${amigoSorteado}<strong/>`;
}