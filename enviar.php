<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recuperando os dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $assunto = $_POST['assunto'];
    $produto = $_POST['produto'];
    $mensagem = $_POST['mensagem'];

    // Destinatário do e-mail
    $destinatario = "marketing@prseg.com.br";

    // Assunto do e-mail
    $assunto_email = "Contato de $nome sobre o Produto: $produto";

    // Montando o corpo do e-mail
    $corpo_email = "Nome: $nome\n";
    $corpo_email .= "E-mail: $email\n";
    $corpo_email .= "Telefone: $telefone\n";
    $corpo_email .= "Assunto: $assunto\n";
    $corpo_email .= "Produto: $produto\n";
    $corpo_email .= "Mensagem: $mensagem\n";

    // Enviando o e-mail
    if (mail($destinatario, $assunto_email, $corpo_email)) {
        echo "Obrigado! Seu Formulário foi enviado com sucesso.";
    } else {
        echo "Desculpe, tente novamente mais tarde.";
    }
}
?>