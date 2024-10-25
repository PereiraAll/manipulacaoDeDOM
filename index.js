let titulo = document.getElementById("titulo")


let nome = prompt("Qual seu nome?")

let cor = prompt("Qual seu cor favorita?(em ingles)")


titulo.innerText = `Bem-vindo(a), ${nome}`
titulo.style.color = cor