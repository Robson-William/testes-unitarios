let banco = [];

const salvar = (nota) => {
	banco.push(nota);
}

const list = () => {
	return banco;
}

export default {salvar, list};
