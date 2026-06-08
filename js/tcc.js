const API_URL = "https://script.google.com/macros/s/AKfycbwl6yAe6ymgWnJWoRpw1_EocnX2RDZQulsjVamC7An-23fwtbEx4gX2lPI5noFH1y44/exec";

let tccs = []; 

const tblTccs = document.querySelector("#tccContent");
const searchInput = document.querySelector("#searchInput");

function normalizarTexto(texto) {
    if (!texto) return "";
    return String(texto)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

// Criador de células genérico
function criarCelula(classe, texto) {
    const celula = document.createElement("span");
    celula.classList.add(classe);
    celula.textContent = texto;
    return celula;
}

// Renderiza a tabela no HTML
function renderTable(lista) {
    tblTccs.innerHTML = "";

    if (lista.length === 0) {
        const row = document.createElement("div");
        row.classList.add("row", "empty");
        row.textContent = "Nenhum trabalho encontrado.";
        row.style.justifyContent = "center";
        row.style.padding = "20px";
        tblTccs.appendChild(row);
        return;
    }

    lista.forEach((tcc) => {
        const row = document.createElement("div");
        const linkWrapper = document.createElement("span");
        const link = document.createElement("a");
        const icon = document.createElement("iconify-icon");

        row.classList.add("row");
        linkWrapper.classList.add("col-link");

        link.href = tcc.link;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "Abrir";

        icon.setAttribute("icon", "akar-icons:link-chain");
        link.prepend(icon);

        linkWrapper.appendChild(link);
        
        // Adicionando as colunas na ordem correta
        row.appendChild(criarCelula("col-titulo", tcc.titulo));
        row.appendChild(criarCelula("col-autor", tcc.autor));
        row.appendChild(criarCelula("col-turma", tcc.turma));       // Nova coluna
        row.appendChild(criarCelula("col-semestre", tcc.semestre)); // Nova coluna
        row.appendChild(linkWrapper);

        tblTccs.appendChild(row);
    });
}

// Função para buscar os dados da Planilha
async function carregarTccs() {
    try {
        tblTccs.innerHTML = "<div class='row' style='justify-content:center; padding:20px;'>Carregando trabalhos...</div>";
        
        const resposta = await fetch(API_URL);
        const dados = await resposta.json();
        
        tccs = dados; // Salva os dados globalmente
        renderTable(tccs); // Renderiza a tabela com os dados reais
    } catch (erro) {
        console.error("Erro ao carregar os dados:", erro);
        tblTccs.innerHTML = "<div class='row' style='justify-content:center; padding:20px; color: red;'>Erro ao carregar os TCCs. Tente novamente mais tarde.</div>";
    }
}

// Inicia a busca assim que o arquivo carregar
carregarTccs();

// Filtro de busca aprimorado (agora busca por turma e semestre também)
searchInput.addEventListener("input", (event) => {
    const termoBusca = normalizarTexto(event.target.value);

    const listaFiltrada = tccs.filter((tcc) => {
        const titulo = normalizarTexto(tcc.titulo);
        const autor = normalizarTexto(tcc.autor);
        const turma = normalizarTexto(tcc.turma);
        const semestre = normalizarTexto(tcc.semestre);

        return titulo.includes(termoBusca) || 
               autor.includes(termoBusca) ||
               turma.includes(termoBusca) ||
               semestre.includes(termoBusca);
    });

    renderTable(listaFiltrada);
});
