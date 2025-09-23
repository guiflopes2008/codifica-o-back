class Usuario {

    setId(id){
        this.id = id
    }

    setNome(nome){
        this.nome = nome
    }
    
    setAtivo(ativo){
        this.ativo = ativo
    }
    
    setDocumento(documento){
        this.documento = documento
    }
    
    getId(){
        return this.id
    }

    getNome(){
        return this.nome
    }

    getAtivo(){
        return this.ativo
    }

    getDocumento(){
        return this.documento
    }
    
}

const usuario1 = new Usuario();
usuario1.setId(1);
usuario1.setNome("guilherme");
usuario1.setAtivo(true);
usuario1.setDocumento("cpf:1234567")