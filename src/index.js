'use strict';
//чекбокс

const checkbox = document.querySelectorAll('.filter-check_checkbox');

checkbox.forEach(function (checkboxElem){
    checkboxElem.addEventListener('change', function (){
        if (this.checked){
        this.nextElementSibling.classList.add('checked');
    }else {
        this.nextElementSibling.classList.remove('checked');
    }
    });
});


// for (let i = 0; i < checkbox.length; i++){
//     checkbox[i].addEventListener('change', function (){
//             if (this.checked){
//         this.nextElementSibling.classList.add('checked');
//     }else {
//         this.nextElementSibling.classList.remove('checked');
//     }
//     });
//
// }



//конец чекбокса


//bin
const btnCart = document.getElementById('cart');
const moduleCart = document.querySelector('.cart');
const closeBtn = document.querySelector('.cart-close');


btnCart.addEventListener('click', () => {
    moduleCart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    moduleCart.style.display = '';
    document.body.style.overflow = '';
});
//end bin

//робота с товаром
const cards = document.querySelectorAll('.goods .card'),
    cartWrapper = document.querySelector('.cart-wrapper'),
    cartEmpty = document.getElementById('cart-empty'),
    countGoods = document.querySelector('.counter');
cards.forEach((card)=>{
   const btn = card.querySelector('button');
   btn.addEventListener('click', () =>{
    const  cardClone = card.cloneNode(true);
    cartWrapper.appendChild(cardClone);
    cartEmpty.remove();
    showData();
   });
});

function showData(){
    const cardsCart = cartWrapper.querySelectorAll('.card');
    countGoods.textContent = cardsCart.length;
}
// конец роботы с товаром