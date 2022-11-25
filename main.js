class Voluntario {

    constructor() {
        this.id = 1;
        this.arrayVoluntarios = [];
    }

    salvar() {
        let voluntario = this.lerDados();

        if(this.validaCampos(voluntario)){
            this.adicionar(voluntario);
        }

        this.listaTabela();
        this.cancelar();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayVoluntarios.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_celular = tr.insertCell();
            let td_email = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayVoluntarios[i].id;
            td_nome.innerText = this.arrayVoluntarios[i].nomeVoluntario;
            td_celular.innerText = this.arrayVoluntarios[i].celularVoluntario;
            td_email.innerText = this.arrayVoluntarios[i].emailVoluntario;

            td_id.classList.add('center');

            td_acoes.classList.add('imgdel');

            let imgDelete = document.createElement('img');
            imgDelete.src = './img/bin.png';
            imgDelete.setAttribute("onclick", "voluntario.deletar("+ this.arrayVoluntarios[i].id +")");

            td_acoes.appendChild(imgDelete);
        }
    }

    adicionar(voluntario){
        this.arrayVoluntarios.push(voluntario);
        this.id++;
    }

    lerDados() {
        let voluntario = {}

        voluntario.id = this.id;
        voluntario.nomeVoluntario = document.getElementById('nome').value;
        voluntario.celularVoluntario = document.getElementById('celular').value;
        voluntario.emailVoluntario = document.getElementById('email').value;

        return voluntario;
    }

    validaCampos(voluntario) {
        let msg = '';

        if(voluntario.nomeVoluntario == ''){
            msg += ' - Informe o nome do voluntário \n';
        }

        if(voluntario.celularVoluntario == ''){
            msg += ' - Informe o celular do voluntário \n';
        }

        if(voluntario.emailVoluntario == ''){
            msg += ' - Informe o e-mail do voluntário \n';
        }

        if(msg != '') {
            alert(msg);
            return false;
        }

        return true;
    }

    cancelar() {
        document.getElementById('nome').value = '';
        document.getElementById('celular').value = '';
        document.getElementById('email').value = '';
    }

    deletar(id) {

        let tbody = document.getElementById('tbody');

        for(let i = 0; i < this.arrayVoluntarios.length; + i++){
            if(this.arrayVoluntarios[i].id == id) {
                this.arrayVoluntarios.splice(i, 1);
                tbody.deleteRow(i);
            }
        }
    }

}

var voluntario = new Voluntario();