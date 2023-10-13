function toggleMode() {
  const html = document.documentElement //realizar troca do modo light/dark
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    //realizar troca das imagens light/dark
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto do Mayk Brito sorrindo, usando óculos e jaqueta preta, com fundo degradê do roxo para azul"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto do Mayk Brito sorrindo, usando óculos e camisa preta, com fundo amarelo"
    )
  }
}
