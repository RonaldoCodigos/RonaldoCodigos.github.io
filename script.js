// 1. Encontrar os elementos com os quais vamos trabalhar
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.querySelector('body');

// 2. Adicionar um "ouvidor de evento" ao botão
themeToggleButton.addEventListener('click', () => {
    // 3. Ação que acontece quando o botão é clicado
    body.classList.toggle('light-mode');

    // 4. (Bônus) Mudar o texto do botão
    if (body.classList.contains('light-mode')) {
        themeToggleButton.textContent = 'Alternar para Modo Escuro';
    } else {
        themeToggleButton.textContent = 'Alternar para Modo Claro';
    }
});