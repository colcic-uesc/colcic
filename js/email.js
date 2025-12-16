const professores = [
    { nome: "Álvaro Vinícius de Souza Coelho", email: "degas@uesc.br" },
    { nome: "Antônio Henrique Figueira Louro", email: "louro@uesc.br" },
    { nome: "Aprígio Augusto Lopes Bezerra", email: "aalbezerra@uesc.br" },
    { nome: "César Alberto Bravo Pariente", email: "cabpariente@uesc.br" },
    { nome: "Cinthia Gomes Lopes", email: "cglopes@uesc.br" },
    { nome: "Dany Sánchez Dominguez", email: "dsdominguez@uesc.br" },
    { nome: "Edgar Alexander", email: "ealexander@uesc.br" },
    { nome: "Eric Roberto Guimarães Rocha Aguiar", email: "ergraguiar@uesc.br" },
    { nome: "Esbel Tomás Valero Orellana", email: "evalero@uesc.br" },
    { nome: "Félix Mas Milian", email: "fmmilian@uesc.br" },
    { nome: "Francisco Bruno Souza Oliveira", email: "fbsoliveira@uesc.br" },
    { nome: "Hamilton José Brumatto", email: "hjbrumatto@uesc.br" },
    { nome: "Hélder Conceição Almeida", email: "hcalmeida@uesc.br" },
    { nome: "Jauberth Weyll Abijaude", email: "jauberth@uesc.br" },
    { nome: "Jorge Lima de Oliveira Filho", email: "jlofilho@uesc.br" },
    { nome: "José Alfredo Santos Souza", email: "jassouza@uesc.br" },
    { nome: "Leard de Oliveira Fernandes", email: "lofernandes@uesc.br" },
    { nome: "Lilia Marta Brandão Soussa Modesto", email: "lilia@uesc.br" },
    { nome: "Luciano Ângelo de Souza Bernardes", email: "lasbernardes@uesc.br" },
    { nome: "Luenne Nailam Sousa Nascimento", email: "lnsnascimento@uesc.br" },
    { nome: "Marcelo Ossamu Honda", email: "mohonda@uesc.br" },
    { nome: "Marta Magda Dornelles", email: "mmbertoldi@uesc.br" },
    { nome: "Martha Ximena Torres Delgado", email: "mxtd@uesc.br" },
    { nome: "Otacílio José Pereira", email: "ojpereira@uesc.br" },
    { nome: "Paulo André Sperandio Giacomin", email: "pasgiacomin@uesc.br" },
    { nome: "Paulo Eduardo Ambrósio", email: "peambrosio@uesc.br" },
    { nome: "Sérgio Fred Ribeiro Andrade", email: "sergiof@uesc.br" },
    { nome: "Susana Marrero Iglesias", email: "smiglesias@uesc.br" },
    { nome: "Trícia Souto Santos", email: "tssantos@uesc.br" },
    { nome: "Vânia Cordeiro da Silva", email: "vania@uesc.br" },
];

const tblEmails = document.querySelector("#tableEmails .content");
const searchInput = document.querySelector("#searchInput");

function renderTable(lista) {
    // Limpa o conteúdo atual da tabela
    tblEmails.innerHTML = "";

    if (lista.length === 0) {
        tblEmails.innerHTML = `<div class="row" style="justify-content:center; padding: 20px;"><span>Nenhum professor encontrado.</span></div>`;
        return;
    }

    // Cria as linhas para cada professor da lista filtrada
    lista.forEach((prof) => {
        const row = document.createElement("div");
        row.classList.add("row");
        
        row.innerHTML += `<span>${prof.nome}</span>`;
        row.innerHTML += `<span><a href="mailto:${prof.email}">${prof.email}</a></span>`;
    
        tblEmails.appendChild(row);
    });
}

renderTable(professores);

// Adiciona o evento de digitação na barra de pesquisa
searchInput.addEventListener("input", (e) => {
    const termoBusca = e.target.value.toLowerCase(); 

    const listaFiltrada = professores.filter((prof) => 
        prof.nome.toLowerCase().includes(termoBusca)
    );
    
    renderTable(listaFiltrada);
});