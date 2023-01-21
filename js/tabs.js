
//slide vars
let cards = document.querySelectorAll('.card');


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
console.log("CONNECTED")