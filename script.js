const btn1 = document.querySelectorAll('.btnJs'),
      btn2 = document.querySelectorAll('.button-with-icon'),
      buttonGrid = document.querySelector('.button-grid'),
      buttonFlex = document.querySelector('.button-flex'),
      cards = document.querySelectorAll('.cards'),
      card = document.querySelectorAll('.card'),
      cardContent = document.querySelector('.card-content'),
      paginationWrapper = document.querySelector('.cards-pagination-wrapper'),
      prevSlide = document.querySelector('.cards-pagination__button-prev'),
      nextSlide = document.querySelector('.cards-pagination__button-next'),
      pagination = document.querySelector('.cards-pagination'),
      paginationTotal = document.querySelector('.cards-pagination__total'),
      paginationDots = document.querySelector('.cards-pagination__dots'),
      hamburger = document.querySelector('.hamburger'),
      headerNav = document.querySelector('.header nav');

// import countries from './products.json' assert { type: 'json' };
// console.log(countries.length)

// for (let i = 0; i < countries.length; i++) {
//     cards.innerHTML += `
//         <div data-destination=${countries[i].dataDestination} class="card">
//             <img class="card-image" src=${countries[i].img.src} alt="${countries[i].title} image">
//             <div class="card-content">
//                 <h4 class="card-content__title">${countries[i].title}</h4>
//                 <div class="card-content__pricing">
//                     <div>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//                             <path d="M9.99999 0C6.32405 0 3.33331 2.99074 3.33331 6.66668C3.33331 7.7702 3.60921 8.86434 4.1337 9.8348L9.63542 19.7852C9.70866 19.9178 9.84823 20 9.99999 20C10.1518 20 10.2913 19.9178 10.3646 19.7852L15.8683 9.83152C16.3908 8.86434 16.6667 7.77016 16.6667 6.66664C16.6667 2.99074 13.6759 0 9.99999 0ZM9.99999 10C8.16202 10 6.66667 8.50465 6.66667 6.66668C6.66667 4.82871 8.16202 3.33336 9.99999 3.33336C11.838 3.33336 13.3333 4.82871 13.3333 6.66668C13.3333 8.50465 11.838 10 9.99999 10Z" fill="white"/>
//                         </svg>
//                         <p>${countries[i].cardContent.quantity}</p>
//                     </div>
//                     <span>&#160 | &#160</span>
//                     <div>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//                             <g clip-path="url(#clip0_1_94)">
//                             <path d="M10 0C4.4767 0 0 4.47713 0 10C0 15.5229 4.4767 20 10 20C15.5233 20 20 15.5224 20 10C20 4.47757 15.5229 0 10 0ZM10.6053 14.4545V15.6121C10.6053 15.7927 10.4648 15.9241 10.2837 15.9241H9.51216C9.33113 15.9241 9.18534 15.7927 9.18534 15.6121V14.5563C8.47513 14.5241 7.75882 14.3727 7.21659 14.1664C6.92284 14.055 6.75922 13.7404 6.83711 13.4357L6.96288 12.9457C7.00683 12.7738 7.12172 12.6302 7.27882 12.5497C7.43592 12.4679 7.62044 12.4596 7.78537 12.5227C8.30193 12.7225 8.91205 12.8678 9.56351 12.8678C10.393 12.8678 10.9609 12.5475 10.9609 11.9653C10.9609 11.4122 10.4952 11.0627 9.41773 10.6985C7.86022 10.1745 6.79359 9.44689 6.79359 8.03473C6.79359 6.75399 7.70007 5.7496 9.24975 5.44367V4.38792C9.24975 4.20732 9.40424 4.04543 9.58527 4.04543H10.3568C10.5379 4.04543 10.6706 4.20732 10.6706 4.38792V5.3414C11.3482 5.37056 11.8373 5.47108 12.2464 5.60425C12.5558 5.70521 12.7386 6.02942 12.6572 6.34536L12.5467 6.78402C12.5036 6.95113 12.3931 7.093 12.2416 7.17481C12.0902 7.25663 11.9113 7.27142 11.7477 7.21528C11.376 7.08778 10.8912 6.97202 10.2768 6.97202C9.33069 6.97202 9.02476 7.37978 9.02476 7.78755C9.02476 8.26798 9.53436 8.57348 10.7716 9.03956C12.5036 9.65099 13.1994 10.4517 13.1994 11.7612C13.199 13.0567 12.2838 14.1638 10.6053 14.4545Z" fill="white"/>
//                             </g>
//                             <defs>
//                             <clipPath id="clip0_1_94">
//                                 <rect width="20" height="20" fill="white"/>
//                             </clipPath>
//                             </defs>
//                         </svg>
//                         <p>${countries[i].cardContent.pricing}</p>
//                     </div>
//                 </div>
//                 <p class="card-content__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
//                 <a class="card-content__link" href="#">Learn More</a>
//             </div>
//         </div>

//     `
// }


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    headerNav.classList.toggle('mobile-nav');

})

//this is a function #1
const onClickFunction = (e) => {
    const event = e.target;

    btn1.forEach((button) => {
        if(button !== event && button.classList.contains('btnJs')) {
            button.classList.remove('active')
        }
    })

    event.classList.add('active')
}

//this is a function #2
const onClickFunction1 = (e) => {
    const event = e.target;

    btn2.forEach((button) => {
        if(button !== event && button.classList.contains('button-with-icon')) {
            button.classList.remove('active')
        }
        
    })
    cards.forEach((cardsItem) => {
        if(cardsItem.classList.contains('cards-active') && cardsItem.classList.contains('cards-grid')){
            cardsItem.removeAttribute('style', 'display')
            cardsItem.setAttribute('style', 'display: flex')
        }else if(cardsItem.classList.contains('cards-active') && cardsItem.classList.contains('cards-flex')){
            cardsItem.removeAttribute('style', 'display')
            cardsItem.setAttribute('style', 'display: grid')
        } 
    })

    event.classList.add('active')
}

//this is eventListener
btn1.forEach((button) => {
    button.addEventListener('click', onClickFunction)
})

//this is eventListener
btn2.forEach((button) => {
    button.addEventListener('click', onClickFunction1)
})

//function that change the view of destinations cards to list
buttonFlex.addEventListener('click', () => {
    cards.forEach(cardsItem => {
        cardsItem.classList.remove('cards-grid')
        cardsItem.classList.add('cards-flex')

    })
    cards[slideIndex - 1].style.display = 'flex'; 
})

//function that change the view of destinations cards to grid
buttonGrid.addEventListener('click', () => {
    cards.forEach(cardsItem => {
        cardsItem.classList.remove('cards-flex')
        cardsItem.classList.add('cards-grid')
    })
    cards[slideIndex - 1].style.display = 'grid'; 
})

//adding the numbers of pages that equal to the number of cards 
for(let i = 0; i < cards.length; i++) {
    const li = pagination.appendChild(document.createElement('li'));
    const btn = li.appendChild(document.createElement('button'));
    if(i < 9){
        btn.innerHTML = '0' + (i + 1);
    } 
    else {
        btn.innerHTML = i + 1;
    }
    paginationTotal.innerHTML = `${cards.length < 10 ? '0' + cards.length : cards.length}`;
    li.classList.add('cards-pagination__item');
    btn.classList.add('cards-pagination__link');
    
}

//these variables can exist only after previous cycle 'for' has finished
const listItem = document.querySelectorAll('.cards-pagination__item');


//Slider

let slideIndex = 1;

showSlides(slideIndex);


function showSlides(n) {
    if (n > cards.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = cards.length;
    }

    cards.forEach((item) => item.style.display = 'none');

    const displayProperty = cards[slideIndex - 1].classList.contains('cards-grid') ? 'grid' : 'flex';
    cards[slideIndex - 1].style.display = displayProperty;

    listItem.forEach((item) => {
        item.classList.remove('pagination__item-current')
    });


    listItem[slideIndex - 1].classList.add('pagination__item-current');
        
}

function plusSlides (n) {
    showSlides(slideIndex += n);
    if(slideIndex == cards.length) {
        paginationTotal.setAttribute('style', 'opacity: 1');
        nextSlide.children[0].children[0].setAttribute('style', 'opacity: 0.1')
    } else {
        paginationTotal.setAttribute('style', 'opacity: .1');
        nextSlide.children[0].children[0].setAttribute('style', 'opacity: 1')
    }

    if(slideIndex == 1) {
        prevSlide.children[0].children[0].setAttribute('style', 'opacity: 0.1')
    } else {
        prevSlide.children[0].children[0].setAttribute('style', 'opacity: 1')
    }
}

nextSlide.addEventListener('click', function(){
    plusSlides(1);

    if(slideIndex < cards.length - 1 && slideIndex !== 1) {
        listItem[slideIndex - 2].style.display = 'none';
        listItem[slideIndex + 1].style.display = 'block';
    } else if(listItem[slideIndex - 2]){
        listItem[slideIndex - 2].style.display = 'block'
    }
    
    if(slideIndex === cards.length - 2) {
        listItem[slideIndex + 1].style.display = 'none';
        listItem[slideIndex - 2].style.display = 'block';
        listItem[slideIndex - 3].style.display = 'block';

        paginationDots.setAttribute('style', 'display: none');
    }
    if (slideIndex == 1) {
        paginationDots.setAttribute('style', 'display: block');
        listItem.forEach(item => item.style.display = 'none');
        
        for (let i = -1; i < 2; i++) {
            listItem[slideIndex - i].style.display = 'block';
        }

    }
});


prevSlide.addEventListener('click', function(){
    plusSlides(-1);
    if(slideIndex === cards.length - 4) {
        paginationDots.setAttribute('style', 'display: block');
    }
    if (slideIndex == cards.length) {
        paginationDots.setAttribute('style', 'display: none');
        listItem.forEach(item => item.style.display = 'none')
        for (let i = 1; i < 6; i++) {
            listItem[slideIndex - i].style.display = 'block';
        }
    }
    if(slideIndex < cards.length) {
        if(listItem[slideIndex + 2]) {
            listItem[slideIndex + 2].style.display = 'none';
        }
        listItem[slideIndex - 1].style.display = 'block';
    } else {
        listItem[slideIndex - 1].style.display = 'none';
    }
});

// Filtering destination

let itemsWithFilter = [];
function addingAttributeToItem(item, event) {
    item.setAttribute('style', 'display: flex');

    if(event.dataset.destination != 'all' && item.parentNode.classList.contains('cards-grid')) {
        item.setAttribute('style', 'grid-row: auto; grid-column: auto');
        item.children[1].setAttribute('style', 'padding: 70px 15px 15px')
    } else {
        item.removeAttribute('style', 'grid-row; grid-column')
        item.children[1].removeAttribute('style', 'padding: 70px 15px 15px')
    }
    
    itemsWithFilter.push(item);
    itemsWithFilter.length < 11 ? paginationWrapper.setAttribute('style', 'display: none') : paginationWrapper.setAttribute('style', 'display: flex')

}


function removeAttributeFromItem(item) {
    item.setAttribute('style', 'display: none');
}

btn1.forEach((button) => {
    button.addEventListener('click', (e) => {
        itemsWithFilter = [];

        if(e.target.dataset.destination === 'all') {
            card.forEach(item => addingAttributeToItem(item, e.target))
        }

        if(e.target.dataset.destination === 'best') {
            card.forEach((item) => {
                
                if(item.dataset.destination === 'best') {
                    addingAttributeToItem(item, e.target)
                } else {
                    removeAttributeFromItem(item)
                }
            });
        }

        if(e.target.dataset.destination === 'nature') {
            card.forEach((item) => {
                if(item.dataset.destination === 'nature') {
                    addingAttributeToItem(item, e.target)
                } else {
                    removeAttributeFromItem(item)
                }
            });
        }

        if(e.target.dataset.destination === 'city') {
            card.forEach((item) => {
                if(item.dataset.destination === 'city') {
                    addingAttributeToItem(item, e.target)
                } else {
                    removeAttributeFromItem(item)
                }
            });
        }

        if(e.target.dataset.destination === 'seasonal') {
            card.forEach((item) => {
                if(item.dataset.destination === 'seasonal') {
                    addingAttributeToItem(item, e.target)
                } else {
                    removeAttributeFromItem(item)
                }
            });
        }
    })
})