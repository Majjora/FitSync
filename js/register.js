document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Coletar os dados do formulário
    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    // Aqui você poderia adicionar lógica de validação ou envio para um backend

    // Simular sucesso no registro
    alert(`Usuário ${nome} registrado com sucesso!`);
    window.location.href = 'index.html';
});
