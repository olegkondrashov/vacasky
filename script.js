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