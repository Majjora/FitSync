document.getElementById('recoverForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;

    // Simulando envio de link de recuperação
    alert(`Um link de recuperação foi enviado para ${email}.`);
    window.location.href = 'login.html';
});
