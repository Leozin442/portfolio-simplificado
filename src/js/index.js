const  botaoMostrarProjetos = document.querySelector ('.btn-mostrar-projetos');

const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativos => {
        projetoInativo.classList.add('ativo');
    });
}

