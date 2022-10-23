const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu ');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu ');
const manuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')
menuEmail.addEventListener('click',toggleDesktopMenu);
burguerMenu.addEventListener('click',toggleMobileMenu);
manuCarritoIcon.addEventListener('click',toggleCarritoAside);

menuEmail.addEventListener('mouseover',cambiarColorOver);
menuEmail.addEventListener('mouseout',cambiarColorOut);

function toggleDesktopMenu(){
    const isAsideClosed= aside.classList.contains('inactive');
    if (!isAsideClosed){
        aside.classList.add('inactive');
     }

    desktopMenu.classList.toggle('inactive')
} 

function toggleCarritoAside(){
    const ismobileMenuClosed= mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed= desktopMenu.classList.contains('inactive');
     //si el mobileMenu esta open, hay que cerrarlo
    if (!ismobileMenuClosed){
       mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
     }

    aside.classList.toggle('inactive'); 
} 

function toggleMobileMenu(){
    const isAsideClosed= aside.classList.contains('inactive');

    if (!isAsideClosed){
        aside.classList.add('inactive');
     }

     mobileMenu.classList.toggle('inactive')
} 

function cambiarColorOver(){
    menuEmail.style.color=  'var(--hospital-green)'
}

function cambiarColorOut(){
    menuEmail.style.color=  'var(--very-light-pink)'
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Laptop',
    price: 1000,
    image:"https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: 'Guitar',
    price: 500,
    image:"https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg"
});
//  <div class="product-card">
// <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
// <div class="product-info">
//   <div>
//     <p>$120,00</p>
//     <p>Bike</p>
//   </div>
//   <figure>
//     <img src="./icons/bt_add_to_cart.svg" alt="">
//   </figure>
// </div>
// </div> 

function rederProducts(arr){
    for(product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productPrice);
    
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
        /*Se maqueta mediante JS el div de arriba, guardando cada producto
        en una lista y por cada producto se va haciendo el div para mostrarlo dentro del cardsContainer, para qeu la informacion no este quemada sino que la sacamos de los atributos de cada objeto producto*/
     }
}
rederProducts(productList);