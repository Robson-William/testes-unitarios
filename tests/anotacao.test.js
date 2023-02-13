describe("Anotações", () => {
	let anotacao = null

	beforeAll(() => {
		anotacao = new Anotacao();
	})

	test("Deve ser possivel adicionar anotações", () => {
		// Anotação
		const nota = {
			id: "01",
			titulo: "Evento 14/02/2023",
			conteudo: "Apresentação de testes de software."
		}
		anotacao.add(nota);
		banco.list.mockReturnValue([nota]);
		const notas = anotacao.list().length;
		expect(notas).toBe(1);
	})

	test("Deve ser possivel buscar todas as anotações", () => {
		// Anotação
		const nota = {
			id: "01",
			titulo: "Evento 14/02/2023",
			conteudo: "Apresentação de testes de software."
		}
		// Passos
		banco.salvar.mockReturnValue([nota]);
		const notas = anotacao.list().length;

		// Pós condições
		expect(notas).toBe(1);
	})

	test("Deve ser possivel buscar uma nota especifica", () => {
		// Anotacão
		const nota = {
			id: "01",
			titulo: "Evento 14/02/2023",
			conteudo: "Apresentação de testes de software."
		}
		
		// Passos
		bancos.salvar.mockReturnValue([nota]);
		const notas = anotacao.search(nota.id).length;

		// Pós condições
		expect(notas).toBe(1);
	})

	test("Deve ser possivel atualizar anotação", () => {
		// Anotação
		const nota = {
			id: "01",
			titulo: "Evento 14/02/2023",
			conteudo: "Apresentação de testes de software."
		}
		
		// Nova nota
		const nota2 = {
			titulo: "Evento 20/02/2023",
			conteudo: "Apresentação de testes de software."
		}
		// Passos
		banco.salvar.mockReturnValue([nota]);
		const notaBuscada = banco.search.mockReturnValue([nota.id]);
		const notaAtualizada = anotacao.update(nota2);
		const buscaAtualizada = banco.search.mockReturnValue([nota.id]);

		expect(buscaAtualizada.titulo).toBe("Evento 20/02/2023");
	})
})
