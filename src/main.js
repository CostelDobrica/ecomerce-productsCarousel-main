import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import products from "./products.json";


const swiperContainer = document.querySelector('.swiper-wrapper');

products.forEach(product => {
  const slide = document.createElement('div');
  slide.classList.add('swiper-slide');
  slide.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="product-name">${product.name}</div>
    <div class="product-price">$${product.price}</div>
    <div class="product-discounted-price">$${product.discountedPrice}</div>
    <button class="action-button">Add to Cart</button>
  `;
  swiperContainer.appendChild(slide);
});

const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: 'swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});