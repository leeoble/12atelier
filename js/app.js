//Menu vars
const hamburgerMenu = document.querySelector('.hamburger');
const itemMenu = document.querySelector('.item_menu');

//slide vars
let cards = document.querySelectorAll('.card');

//fondo vars
let multi = 80;
let unshuffled = [" Diseño Web ", " Diseño Grafico ",  " e-commerce ", " Marketing ", " web apps", " SEO", " e-mail", " hosting", " Diseño Web ", " Diseño Grafico ",  " e-commerce ", " Marketing ", " web apps", " SEO", " e-mail", " hosting"];
var fondoservicios ="";
var str;

//Menu
const menuIsActive = () => {
    hamburgerMenu.classList.toggle('active');
    itemMenu.classList.toggle('active')
};
hamburgerMenu.addEventListener('click', menuIsActive);

//Slide


cards.forEach(card =>{
    card.addEventListener('click', ()=>{
        deactivate();
        card.classList.add('active')
    })
});
function deactivate(){
    cards.forEach(card =>{
        card.classList.remove('active')
    })
}

//fondo

let shuffled = unshuffled
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

str = shuffled.join(" ");

for (let i = 0; i < multi; i++){
  fondoservicios += str
}

document.getElementById("string-effect").innerHTML = fondoservicios;
