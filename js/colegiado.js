const composicao = [
	{
		materia: "Álgebra",
		departamento: "Matemática",
		membro: "Prof. Eduardo Silva Palmeira",
	},
	{
		materia: "Administração de empresa",
		departamento: "DCAC",
		membro: "Profa. Clemilda Gonzaga Santos",
	},
	{
		materia: "Arquitetura e organização de computadores",
		departamento: "Computação",
		membro: "Profa. Susana Marrero Iglesiasa",
	},
	{
		materia: "Banco de dados",
		departamento: "Computação",
		membro: "Profa. Tricia Souto Santos",
	},
	{
		materia: "Cálculo diferencial e integral",
		departamento: "Matemática",
		membro: "Profa. Mirela Vanina de Mello",
	},
	{
		materia: "Direito e legislação",
		departamento: "DCJUR",
		membro: "Prof. Wagner de Oliveira Rodrigues ",
	},
	{
		materia: "Eletrônica",
		departamento: "Computação",
		membro: "Profa. Martha Ximena Torres Delgado",
	},
	{
		materia: "Engenharia de software",
		departamento: "Computação",
		membro: "Prof. Luciano Ângelo de Souza Bernardes",
	},
	{
		materia: "Economia",
		departamento: "Economia",
		membro: "Prof. Pedro Lopes Marinho",
	},
	{
		materia: "Estágio",
		departamento: "Computação",
		membro: "Prof. Marcelo Ossamu Honda",
	},
	{
		materia: "Física",
		departamento: "Física",
		membro: "Prof. Marcelo O'Donnell Krause",
	},
	{
		materia: "Inglês",
		departamento: "DLA",
		membro: "Profa. Walkíria França Vieira Teixeira",
	},
	{
		materia: "Inteligência artificial",
		departamento: "Computação",
		membro: "Prof. Paulo Eduardo Ambrósio",
	},
	{
		materia: "Linguagens de programação",
		departamento: "Computação",
		membro: "Prof. Hélder Conceição Almeida",
	},
	{
		materia: "Lógica matemática",
		departamento: "Computação",
		membro: "Prof. Francisco Bruno Souza Oliveira",
	},
	{
		materia: "Metodologia da pesquisa científica",
		departamento: "DFCH",
		membro: "Profa. Ana Paula de Almeida Andrade",
	},
	{
		materia: "Probabilidade e estatística",
		departamento: "Estatística",
		membro: "Prof. José Cláudio Faria",
	},
	{
		materia: "Processamento de sinais",
		departamento: "Computação",
		membro: "Profa. Vânia Cordeiro da Silva",
	},
	{
		materia: "Programação e estrutura de dados",
		departamento: "Computação",
		membro: "Prof. Dany Sanchez Dominguez",
	},
	{
		materia: "Redes de transmissão de dados",
		departamento: "Computação",
		membro: "Prof. Mathias Santos de Brito",
	},
	{
		materia: "Sistemas de informação e bancos de dados",
		departamento: "Computação",
		membro: "Prof. Sérgio Fred Ribeiro Andrade",
	},
	{
		materia: "Sistemas operacionais",
		departamento: "Computação",
		membro: "Prof. Antonio Henrique Figueira Louro",
	},
	{
		materia: "Sociologia",
		departamento: "Computação",
		membro: "Prof. Hamilton José Brumatto",
	},
	{
		materia: "Teoria da computação",
		departamento: "Computação",
		membro: "Profa. César Alberto Bravo Pariente",
	},
	{
		materia: "Tópicos em computação",
		departamento: "Computação",
		membro: "Prof. Esbel Tomas Valero Orellana",
	},
	{
		materia: "Representação Discente",
		departamento: "Computação",
		membro: "Sr. Isaac Nascimento Lima",
	},
	{
		materia: "Representação Discente",
		departamento: "Computação",
		membro: "Sra. Isabelle Silva dos Santos da Cruz",
	},
	{
		materia: "Representação Discente",
		departamento: "Computação",
		membro: "Sr. João Victor Oliveira Rupp",
	},
	{
		materia: "Representação Discente",
		departamento: "Computação",
		membro: "Sra. Maira Gomes Santos",
	},
	{
		materia: "Representação Discente",
		departamento: "Computação",
		membro: "Sra. Maria Gabriella Araújo Oliveira",
	},
]

const coordenacao = [
	{ name: "Marta Magda Dornelles", role: "Coordenadora" },
	{ name: "Jorge Lima de Oliveira Filho", role: "Vice-Coordenador" },
	{ name: "Rita de Cássia Souza Dias da Silva", role: "Secretária" },
	{ name: "Ramon Santos Costa", role: "Técnico de Informática" },
	{ name: "Flávio Victor Souza de Melo", role: "Técnico de Informática" },
]

const tblColegiado = document.querySelector("#tableColegiado .content")
composicao.forEach((membro) => {
	const row = document.createElement("div")
	row.classList.add("row")
	row.innerHTML += `<span>${membro.materia}</span>`
	row.innerHTML += `<span>${membro.departamento}</span>`
	row.innerHTML += `<span>${membro.membro}</span>`

	tblColegiado.appendChild(row)
})

const tblCoordenacao = document.querySelector("#tableCoordenação .content")
coordenacao.forEach((membro) => {
	const row = document.createElement("div")
	row.classList.add("row")
	row.innerHTML += `<span>${membro.name}</span>`
	row.innerHTML += `<span>${membro.role}</span>`

	tblCoordenacao.appendChild(row)
})
