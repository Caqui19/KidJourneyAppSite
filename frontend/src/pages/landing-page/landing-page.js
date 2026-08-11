function abrirMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = 'flex';
}

function fecharMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = 'none';
}

function visualizarSenha() {
    const campoSenha = document.querySelectorAll('.senhaContainer input');
    const iconesSenha = document.querySelectorAll('.vizualizarSenha');

    campoSenha.forEach(field => {
        field.type = field.type === 'password' ? 'text' : 'password';
    });

    iconesSenha.forEach(icon => {
        icon.textContent = campoSenha[0].type === 'password'
            ? 'visibility_off'
            : 'visibility';
    });
}