import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import products from "./products.json";

document.addEventListener("DOMContentLoaded", () => {
  const swiperContainer = document.getElementById("product-container");
  const template = document.getElementById("product-template").content;

  products.forEach((product) => {
    const slide = document.importNode(template, true);
    slide.querySelector("img").src = product.image;
    slide.querySelector("img").alt = product.name;
    slide.querySelector(".product-name").textContent = product.name;
    slide.querySelector(".product-price").textContent = `$${product.price}`;
    slide.querySelector(
      ".product-discounted-price"
    ).textContent = `$${product.discountedPrice}`;
    swiperContainer.appendChild(slide);
  });

  new Swiper(".swiper-container", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
