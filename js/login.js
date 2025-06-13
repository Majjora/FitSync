document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio tradicional do formulário

    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('password').value.trim();

    if (email && senha) {
        // Redireciona para a página principal
        window.location.href = 'index.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});