import {products} from '../data/products.js'
import {images} from '../data/images.js'





// Homepage // 
const homePage = document.querySelector ('.homepage')
const aiBuilder = document.querySelector ('.aiBuilder')
const trackingOrder = document.querySelector ('.trackingOrder')
const cartSection = document.querySelector ('.cartSection')
const userAccount = document.querySelector ('.userAccount')

document.getElementById ('homepage').addEventListener ('click' , () => {
  homePage.style.display = 'flex'
  aiBuilder.style.display = 'none'
  trackingOrder.style.display = 'none'
  cartSection.style.display = 'none'
  userAccount.style.display = 'none'
})
document.getElementById ('aiBuilder').addEventListener ('click' , () => {
  homePage.style.display = 'none'
  aiBuilder.style.display = 'flex'
  trackingOrder.style.display = 'none'
  cartSection.style.display = 'none'
  userAccount.style.display = 'none'
})
document.getElementById ('trackingOrder').addEventListener ('click' , () => {
  homePage.style.display = 'none'
  aiBuilder.style.display = 'none'
  trackingOrder.style.display = 'flex'
  cartSection.style.display = 'none'
  userAccount.style.display = 'none'
})
document.getElementById ('cart').addEventListener ('click' , () => {
  homePage.style.display = 'none'
  aiBuilder.style.display = 'none'
  trackingOrder.style.display = 'none'
  cartSection.style.display = 'flex'
  userAccount.style.display = 'none'
})
document.getElementById ('userAccount').addEventListener ('click' , () => {
  homePage.style.display = 'none'
  aiBuilder.style.display = 'none'
  trackingOrder.style.display = 'none'
  cartSection.style.display = 'none'
  userAccount.style.display = 'flex'
})

// Ai Builder // 
document.querySelector ('.aiInput').addEventListener ('keydown' , event => {
  
  if (event.key === 'Enter') {
    const budget = Number (document.querySelector ('.aiInput').value)
    const aiProductContainer = document.querySelector ('.aiProductContent')

    aiProductContainer.innerHTML = '';

    const matchingProduct = products.filter (product => product.price <= budget && product.category === 'desktop')

     

    if (matchingProduct.length > 0 ) {
      matchingProduct.forEach (product => {
      aiProductContainer.innerHTML += 
      `<div class="product-container">
      <img src="${product.images}" alt="${product.name}" class="product-image">
      <div class="product-name-container">${product.name}</div>
      <div class="product-price-container">₱${product.price.toLocaleString()}</div>
      <button class="cart-button-container">Add to Cart</button>
    </div>`})
    }
    else if(!budget) productContainer.innerHTML = `Enter your budget...`
    else productContainer.innerHTML = `No products found within budget ₱${budget.toLocaleString ()}`


  }
})

// Cart Section // 
const cartSectionContainer = document.querySelector ('.cartSectionContent')

products.forEach (product => {
  if (product.category === 'parts') {
    cartSectionContainer.innerHTML += 
    `<div class="cartSectionProduct">
        <img src="${product.images}" alt="" class="cartSectionImage">
        <div class="cartSectionProductName">${product.name}</div>
        <div class="cartSectionPrice">₱${product.price.toLocaleString ()}</div>
        <div class="cartSectionQty">1</div>
        <div class="cartSectionPrice">₱${product.price.toLocaleString ()}</div>
      </div>`
  }
})



// UserAccount // 
const loginForm = document.querySelector ('.userForm')
const registerForm = document.querySelector ('.registerForm')

document.getElementById('showLogin').addEventListener ('click', () => {
  loginForm.style.display = 'flex';
  registerForm.style.display = 'none';
})

document.getElementById ('showRegister').addEventListener ('click' , () => {
  registerForm.style.display = 'flex';
  loginForm.style.display = 'none';
})




// Auto Next Image // 
const imageContainer = document.querySelector ('.homeAutoNextContainer')
let index = 0; 
imageContainer.innerHTML = `<img src="${images[index]}" alt="" class="msi">`

setInterval ( () => {
  index = (index + 1) % images.length
  imageContainer.innerHTML = `<img src="${images[index]}" alt="" class="msi">`
}, 3000)