/*
Obejetivo 1 - quando usuário clicar no bitão de ver trailer, devemos abrir
a modal com o video do trailer
        - passo 1 - dar um jeito o elemneto que representa o botão na tela usando o Js
        - passo 2 - dar u jeito de indentificar quando o usuario clicar no botao
        - passo 3 - dar um jeito de pegar elemento da modal do Js
        - passo 4 - abrir a modal na tela
Obejetivo 2 - quando o usuario clicar no X devemos fechar a modal
         - passo 1 dar um jeito de pegar o elemento de fehcar a modal usando Js
         - passo 2 - dar um jeito de identificar quando o usuario clica no X
         - passo 3 - fechar a modal
*/

const botaoTrailer = document.querySelector(".butao-trailer");
const video = document.getElementById("video")
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function altenarModal(){
    modal.classList.toggle("aberto")
}


botaoTrailer.addEventListener("click",() => {
    altenarModal();
 video.setAttribute("src", linkDoVideo)
});
const botaoFecharModal = document.querySelector(".fechar-modal")
botaoFecharModal.addEventListener("click", () =>{ 
   altenarModal()
   video.setAttribute("src","")
});
