document.addEventListener('click', (e) => {
    const listaClasse = Array.prototype.slice.call(e.target.classList);
    if (e.target && listaClasse.includes('acessarFilme')) {
        const url = e.target.dataset.url;
        window.open(url, '_blank');
    }

    if (e.target && listaClasse.includes('excluirFilme')) {
        const response = confirm('Deseja realmente excluir o filme?');
        if (response) {
            const id = e.target.dataset.id;
            document.getElementById(id).remove();
        }


    }
});

let dados = {
    titulo: '',
    categoria: '',
    ano: 0,
    link: '',
}

const atualizarDados = () => {
    dados = {
        titulo: document.getElementById('titulo').value,
        categoria: document.getElementById('categoria').value,
        ano: document.getElementById('ano').value,
        link: document.getElementById('link').value,
    }

    document.getElementById('debug').innerHTML = JSON.stringify(dados)
}

const montaItem = () => {

    const id = new Date().getTime();

    const item = `
            <tr id="${id}">
                <td>${dados.titulo}</td>
                <td>${dados.categoria}</td>
                <td>${dados.ano}</td>
                <td class="text-right ">
                    <button class="btn btn-info acessarFilme" data-url="${dados.link}"> Acessar</button>
                    <button class="btn btn-danger excluirFilme" data-id="${id}"> Deletar</button>
                </td>
                </tr>`;


    return item;
}

const cadastrar = () => {

    if (
        dados.titulo == ''
        || dados.categoria == ''
        || dados.ano == 0
        || dados.link == ''

 ) {
        alert('Preencha todos os campos');
    } else {
        document.getElementById('lista_filmes').insertAdjacentHTML('beforeEnd', montaItem());
        dados = {};
    }




}