function copyToClipboard(button) {
  const codeContainer = button.previousElementSibling;
  const textToCopy = codeContainer.textContent;
  navigator.clipboard.writeText(textToCopy).then(() => {
    button.textContent = "¡Copiado!";
    setTimeout(() => {
      button.textContent = "Copiar";
    }, 2000);
  }).catch(err => {
    console.error("Error al copiar el texto: ", err);
  });
}