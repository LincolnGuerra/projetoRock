function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a img light
    img.setAttribute("src", "./assets/avatar-light1.png")
    img.setAttribute("alt", "Foto de Lico sorrindo")
  } else {
    // se tiver light mode, manter a img normal
    img.setAttribute("src", "./assets/avatar1.png")
    img.setAttribute("alt", "Ole porco")
  }

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
}
