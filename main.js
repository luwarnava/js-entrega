function validarFormulario() {
    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);

    var mensagem = document.getElementById('mensagem');

    if (campoB > campoA) {
        mensagem.textContent = "Formulário válido! Campo B é maior que o Campo A.";
        mensagem.style.color = "green";
        return true;
    } else {
        mensagem.textContent = "Erro: Campo B deve ser maior que o Campo A.";
        mensagem.style.color = "red";
        return false;
    }
}