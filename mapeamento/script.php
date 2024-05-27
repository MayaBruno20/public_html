<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recuperando os dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $produto = $_POST['produto'];
    $mensagem = $_POST['mensagem'];

    // Destinatário do e-mail
    $destinatario = "marketing@prseg.com.br";

    // Assunto do e-mail
    $assunto_email = "Contato de $nome sobre o Formulario de Pesquisa";

    // Montando o corpo do e-mail
    $corpo_email = "Nome: $nome\n";
    $corpo_email .= "E-mail: $email\n";
    $corpo_email .= "Telefone: $telefone\n";
    $corpo_email .= "Vencimento: $mensagem\n";

    if(isset($_POST['produto']) && is_array($_POST['produto'])) {
        $produtos_selecionados = $_POST['produto'];
        $produtos_formatados = implode(", ", $produtos_selecionados);
        $corpo_email .= "Produtos: $produtos_formatados\n";
    }

    // Enviando o e-mail
    if (mail($destinatario, $assunto_email, $corpo_email)) {
        header("Location: https://prseg.com.br/obrigado.html");
        exit();
    } else {
        echo "Desculpe, tente novamente mais tarde.";
    }
}
?>