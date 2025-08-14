import { products } from "../data/products.js"

const param = new URLSearchParams (window.location.search)
const category = param.get ('category')

const product = products.filter (product => product.category === category)

const container = document.querySelector ('.body-content')


if (product) {
  product.forEach (product => {
    container.innerHTML +=
    `<div class="product-container">
      <img src="${product.images}" alt="${product.name}" class="product-image">
      <div class="product-name-container">${product.name}</div>
      <div class="product-price-container">₱${product.price.toLocaleString ()}</div>
      <button class="cart-button-container">Add to Cart</button>
    </div>`
  })
} 