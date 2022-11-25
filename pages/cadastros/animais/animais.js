class Animais {

    constructor() {
        this.id = 1;
        this.arrayAnimais = [];
    }

    salvar() {
        let animal = this.lerDados();

        if(this.validaCampos(animal)){
            this.adicionar(animal);
        }

        this.listaTabela();
        this.cancelar();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayAnimais.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_tipo = tr.insertCell();
            let td_raca = tr.insertCell();
            let td_peso = tr.insertCell();
            let td_porte = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayAnimais[i].id;
            td_tipo.innerText = this.arrayAnimais[i].tipoAnimal;
            td_raca.innerText = this.arrayAnimais[i].racaAnimal;
            td_peso.innerText = this.arrayAnimais[i].pesoAnimal;
            td_porte.innerText = this.arrayAnimais[i].porteAnimal;

            td_id.classList.add('center');

            td_acoes.classList.add('imgdel');

            let imgDelete = document.createElement('img');
            imgDelete.src = '../../../img/bin.png';
            imgDelete.setAttribute("onclick", "animal.deletar("+ this.arrayAnimais[i].id +")");

            td_acoes.appendChild(imgDelete);
        }
    }

    adicionar(animal){
        this.arrayAnimais.push(animal);
        this.id++;
    }

    lerDados() {
        let animal = {}

        animal.id = this.id;
        animal.tipoAnimal = document.getElementById('tipo').value;
        animal.racaAnimal = document.getElementById('raca').value;
        animal.pesoAnimal = document.getElementById('peso').value;
        animal.porteAnimal = document.getElementById('porte').value;

        return animal;
    }

    validaCampos(animal) {
        let msg = '';

        if(animal.tipoAnimal == ''){
            msg += ' - Informe o tipo do animal (gato,cachorro e etc) \n';
        }

        if(animal.racaAnimal == ''){
            msg += ' - Informe a raça do animal \n';
        }

        if(animal.pesoAnimal == ''){
            msg += ' - Informe o peso do animal \n';
        }

        if(animal.porteAnimal == ''){
            msg += ' - Informe o porte do animal \n';
        }


        if(msg != '') {
            alert(msg);
            return false;
        }

        return true;
    }

    cancelar() {
        document.getElementById('tipo').value = '';
        document.getElementById('raca').value = '';
        document.getElementById('peso').value = '';
        document.getElementById('porte').value = '';
    }

    deletar(id) {

        let tbody = document.getElementById('tbody');

        for(let i = 0; i < this.arrayAnimais.length; + i++){
            if(this.arrayAnimais[i].id == id) {
                this.arrayAnimais.splice(i, 1);
                tbody.deleteRow(i);
            }
        }
    }

}

var animal = new Animais();