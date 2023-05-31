let images = ['img/apple.png', 'img/apple_2.png', 'img/bga.png', 'img/bga2.jpg', 'img/ipad.png']; // Lista de caminhos das imagens
let currentIndex = 0; // Índice da imagem atual

function changeImage() {
  let imageElement = document.getElementById('background-header');
  imageElement.src = images[currentIndex]; // Define o caminho da imagem atual
  
  currentIndex++; // Avança para a próxima imagem
  
  // Se chegarmos ao fim da lista, voltamos ao início
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
}

setInterval(changeImage, 5000); // Executa a função changeImage a cada 3 segundos


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("cards-style");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Altera o slide a cada 3 segundos (3000ms)
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
          alert('O e-mail foi enviado com sucesso!');
          // Limpar os campos do formulário após o envio
          document.getElementById('contactForm').reset();
        }, function (error) {
          alert('Ocorreu um erro ao enviar o e-mail:', error);
        });
    });
  })();


