import Swiper, { Navigation, Pagination, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Keyboard],
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 55,
    slideToClickedSlide: true,
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 60
        },
        1000: {
            slidesPerView: 3.5,
            spaceBetween: 80
        },
    },
});

swiper.on('slideChange', () => attemptsCount = 0);

const forms = document.querySelectorAll('.card__form');
const cardsArr = Array.from(document.querySelectorAll('.card'));
const resetButton = document.querySelector('.reset-button');
const attemptsAllowed = 3;
let attemptsCount = 0;
const mistakesElement = document.querySelector('.mistakes');
const correctElement = document.querySelector('.correct');
let mistakesTotal = 0;
let correctTotal = 0;

const resetAll = () => {
    mistakesElement.textContent = 0;
    correctElement.textContent = 0;
    forms.forEach(form => form.reset())
    cardsArr.forEach(card => {
        const cardFace = card.querySelector('.card__face--back');
        cardFace.classList.remove('card__face--success');
        cardFace.classList.remove('card__face--failed');
        card.classList.remove('card--flipped');
    })
    attemptsCount = 0;
}

const submitAnswer = (target) => {
    let guess = target.querySelector('.guess').value;
    const cardCurrent = cardsArr[target.dataset.formId - 1];
    const cardNextInput = cardsArr[target.dataset.formId].querySelector('input');
    const cardFace = cardCurrent.querySelector('.card__face--back');
    const answer = cardCurrent.querySelector('.card__letter-name').textContent;

    if (guess.trim() === '') {
        cardCurrent.classList.add('card--error');
        return setTimeout(() => {
            cardCurrent.classList.remove('card--error');
        }, '600');
    }

    attemptsCount++;

    if (guess.toLowerCase() === answer) {
        correctElement.textContent = ++correctTotal
        cardFace.classList.add('card__face--success');
        cardCurrent.classList.add('card--flipped');
        return setTimeout(() => {
            swiper.slideNext(250, false);
            setTimeout(() => cardNextInput.focus(), 200)
        }, 1300);
    }

    if (attemptsCount === attemptsAllowed) {
        attemptsCount = 0;
        mistakesElement.textContent = ++mistakesTotal;
        cardFace.classList.add('card__face--failed');
        cardCurrent.classList.add('card--flipped');
        return setTimeout(() => {
            swiper.slideNext(250, false);
            setTimeout(() => cardNextInput.focus(), 200)
        }, 1300);
    }

    mistakesElement.textContent = ++mistakesTotal
    cardCurrent.classList.add('card--error');
    setTimeout(() => {
        cardCurrent.classList.remove('card--error');
    }, '600');
}

forms.forEach(form => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        submitAnswer(event.target);
        form.reset();
    })
})

resetButton.addEventListener('click', () => {
    resetAll();
    swiper.slideTo(swiper.initialSlide, 300, false);
});