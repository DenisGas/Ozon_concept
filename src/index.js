'use strict';
//чекбокс


function toggleCheckbox(){
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
}
//конец чекбокса
//bin
function toggleCart(){
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
}
//end bin
//робота с товаром
function addCart(){
    const cards = document.querySelectorAll('.goods .card'),
        cartWrapper = document.querySelector('.cart-wrapper'),
        cartEmpty = document.getElementById('cart-empty'),
        countGoods = document.querySelector('.counter');

    cards.forEach((card)=>{
        const btn = card.querySelector('button');


        btn.addEventListener('click', () =>{
            const  cardClone = card.cloneNode(true);
            cartWrapper.appendChild(cardClone);
            showData();

            const removeBtn = cardClone.querySelector('.btn');
            removeBtn.textContent = 'Удалить из корзины';
            removeBtn.addEventListener('click', () =>{
                cardClone.remove();
                showData();
            });
        });
    });

    function showData(){
        const cardsCart = cartWrapper.querySelectorAll('.card'),
            cardPrice = cartWrapper.querySelectorAll('.card-price'),
            cardTotal = document.querySelector('.cart-total span');
        let sum = 0;
        countGoods.textContent = cardsCart.length;

        cardPrice.forEach((cardPrice) =>{
            let price = parseFloat(cardPrice.textContent);
            sum += price;
        });
        cardTotal.textContent = sum;

        if (cardsCart.length !== 0){
            cartEmpty.remove();
        } else {
            cartWrapper.appendChild(cartEmpty);
        }
    }
}
// конец роботы с товаром
// filter Actions

// end filter
function actionPage(){
    const cards = document.querySelectorAll('.goods .card'),
        goods = document.querySelector('.goods'),
        discountCheckbox = document.getElementById('discount-checkbox'),
        min = document.getElementById('min'),
        max = document.getElementById('max');
    discountCheckbox.addEventListener('click', ()=> {
            cards.forEach((card)=>{
           if (discountCheckbox.checked){
               if (!card.querySelector('.card-sale')){
                    card.parentElement.style.display = 'none';
               }

           }else {
               card.parentElement.style.display = '';
           }
       });
    });

    function filterPrice(){
        cards.forEach((card) =>{
            const cardPrice = card.querySelector('.card-price');
            const price = parseFloat(cardPrice.textContent);

            if ((min.value && price < min.value) || (max.value && price > max.value )){

                card.parentElement.remove();

            }else {
            goods.appendChild(card.parentElement);
            }
        });
    }



    min.addEventListener('change', filterPrice);
    max.addEventListener('change', filterPrice);

}
////functions////
toggleCheckbox();
toggleCart();
addCart();
actionPage();