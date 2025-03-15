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

}
adicionarAmigo();