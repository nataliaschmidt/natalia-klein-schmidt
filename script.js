  // "captura" o elemento de botão com id toggleTheme
const toggleThemeButton = document.getElementById('toggleTheme')

  // função responsável por alterar o tema do body
const toggleTheme = () => {
  // "Captura" o elemnto body do html
  const htmlBody = document.body;
  // adiciona a classe dark no elemento body caso não possua ou remove caso possua a classe dark
  htmlBody.classList.toggle('dark');
}

  // adiciona o evento de click no botão, chamando a função toggleTheme
toggleThemeButton.addEventListener('click', toggleTheme)