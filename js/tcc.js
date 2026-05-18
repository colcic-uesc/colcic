const tccs = [
	{
		titulo: "Aplicação de Redes Neurais na Predição de Colheita",
		autor: "João Silva Santos",
		link: "https://drive.google.com/link1",
	},
	{
		titulo: "Análise Comparativa entre React Native e Flutter",
		autor: "Maria Oliveira Souza",
		link: "https://drive.google.com/link2",
	},
	{
		titulo: "Segurança em Dispositivos IoT utilizando Blockchain",
		autor: "Carlos Augusto Ferreira",
		link: "https://drive.google.com/link3",
	},
];

const tblTccs = document.querySelector("#tccContent");
const searchInput = document.querySelector("#searchInput");

function normalizarTexto(texto) {
	return texto
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "");
}

function criarCelula(classe, texto) {
	const celula = document.createElement("span");
	celula.classList.add(classe);
	celula.textContent = texto;

	return celula;
}

function renderTable(lista) {
	tblTccs.innerHTML = "";

	if (lista.length === 0) {
		const row = document.createElement("div");
		row.classList.add("row", "empty");
		row.textContent = "Nenhum trabalho encontrado.";

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
		row.appendChild(criarCelula("col-titulo", tcc.titulo));
		row.appendChild(criarCelula("col-autor", tcc.autor));
		row.appendChild(linkWrapper);

		tblTccs.appendChild(row);
	});
}

renderTable(tccs);

searchInput.addEventListener("input", (event) => {
	const termoBusca = normalizarTexto(event.target.value);

	const listaFiltrada = tccs.filter((tcc) => {
		const titulo = normalizarTexto(tcc.titulo);
		const autor = normalizarTexto(tcc.autor);

		return titulo.includes(termoBusca) || autor.includes(termoBusca);
	});

	renderTable(listaFiltrada);
});
