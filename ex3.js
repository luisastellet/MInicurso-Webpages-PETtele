const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addItem() {
    if (inputBox.value === '') // se o usuário enviar nada no campo de item
        alert('Item inválido'); // não permite a adição
    else {
        let li = document.createElement('li'); // cria novo item no ul
        li.innerHTML = inputBox.value; // preenche o item com o conteúdo enviado
        listContainer.appendChild(li); // adiciona o item à lista de itens existente
        let span = document.createElement("span"); // cria um espaço para adicionar o "x"
        span.innerHTML = "\u00d7"; // preenche com um "x"
        li.appendChild(span); // adiciona o "x" no item
    }
    inputBox.value = ""; // limpa o campo de item
    saveData();
}

listContainer.addEventListener("click", function (e) { // espera o "click" do usuário na lista
    if (e.target.tagName === "LI") { // se o usuário tiver clicado em um li
        e.target.classList.toggle("checked"); // altera o li para clicado
        saveData(); // atualiza a lista
    } else if(e.target.tagName === "SPAN") { // se o usuário tiver clicado no 'x'
        e.target.parentElement.remove(); // remove o elemento em que está inserido
        saveData(); // atualiza a lista
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showItem() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showItem(); // atualiza o container