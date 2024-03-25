// const body = document.querySelector('.body');
const loader = document.querySelector('.loader');
window.addEventListener("load", () =>{
    loader.classList.add('loaded');
    addEventListener("animationend", () => {body.removeChild(loader)});
});