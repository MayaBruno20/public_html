document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var fgtsBalance = parseFloat(document.getElementById('fgtsBalance').value);

    if (isNaN(fgtsBalance)) {
        alert("Por favor, insira um valor válido para o saldo do FGTS.");
        return;
    }

    // Aqui você pode definir a lógica para calcular o valor do empréstimo com base no saldo do FGTS
    var loanAmount = fgtsBalance * 0.73; // Exemplo simples: 30% do saldo do FGTS

    // Exibindo o resultado na página
    document.getElementById('result').innerHTML = "<p>Na simulação, seu saldo disponível para antecipação seria de R$ " + loanAmount.toFixed(2) +". <br>Valores sujeitos a mudanças, consulte com nossos <br>especialistas!</p>";
});
