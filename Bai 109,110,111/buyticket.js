const buyBtns =
 document.querySelectorAll('.js-buy-ticket')
const modal = 
 document.querySelector('.modal')   
    
function showBuyTickets(){
   modal.classList.add('open')
}

for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click',showBuyTickets)
}