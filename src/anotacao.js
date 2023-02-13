import banco from "./banco";

class Anotacao {
	add(nota){
		banco.salvar(nota);
	}

	list(){
		return banco.list();
	}
}

export {Anotacao};
