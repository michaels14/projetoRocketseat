function toggleMode() {
  const html = document.documentElement //realizar troca do modo light/dark
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    //realizar troca das imagens light/dark
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto do Michael Lopes, de camiseta branca com corrente, olhando em direção à câmera"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto do Michael Lopes, de terno com gravata vermelha, olhando para o lado"
    )
  }
}
