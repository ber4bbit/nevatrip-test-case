const screenWidth = window.innerWidth;

const titles = document.querySelectorAll('.trip__title');
const desktopTitle = 'Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020';
const mobileTitle = 'АКЦИЯ - Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2019';

const prices = document.querySelectorAll('.trip__price-text');
const desktopPrice = '900 ₽';
const mobilePrice = '2900 ₽';


const changeContent = (elemsToChange, platformText) => {
    elemsToChange.forEach(elem => {
        elem.innerText = platformText;
    })

    if (elemsToChange == prices) elemsToChange[0].innerText = '900 ₽';
}

screenWidth > 400
    ? (changeContent(titles, desktopTitle), changeContent(prices, desktopPrice))
    : (changeContent(titles, mobileTitle), changeContent(prices, mobilePrice))