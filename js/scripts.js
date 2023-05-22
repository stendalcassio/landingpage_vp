
function backToTop() {
    document.body.scrollTop = 0; // Para navegadores da web
    document.documentElement.scrollTop = 0; // Para navegadores Chrome, Firefox, IE e Opera
  }


(function () {
    // Configurar EmailJS
    emailjs.init("TLgmq1GxxS4VduIAu");

    // Lidar com o envio do formulário
    document.getElementById('contactForm').addEventListener('submit', function (event) {
      event.preventDefault(); // Impedir o envio padrão do formulário

      // Obter os valores dos campos de entrada
      var nome = document.getElementById('nome').value;
      var telefone = document.getElementById('telefone').value;
      var mensagem = document.getElementById('mensagem').value;
      var email = document.getElementById('email').value;

      // Definir os parâmetros do e-mail
      var params = {
        nome: nome,
        telefone: telefone,
        mensagem: mensagem,
        email: email
      };

      // Enviar o e-mail usando o EmailJS
      emailjs.send('gmailMessage', 'template_y39bg3f', params)
        .then(function () {
          console.log('O e-mail foi enviado com sucesso!');
          // Limpar os campos do formulário após o envio
          document.getElementById('contactForm').reset();
        }, function (error) {
          console.log('Ocorreu um erro ao enviar o e-mail:', error);
        });
    });
  })();


