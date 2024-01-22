window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("scmenu").style.backgroundColor = "whitesmoke";
  }
  else {
    document.getElementById("scmenu").style.backgroundColor = "rgba(245, 245, 245, 0)";
  }
}

$('.open-inner-menu').click(function () {
  $(this).find('.inner-menu').show(1000)
})
$('.open-inner-menu').mouseleave(function () {
  $(this).find('.inner-menu').hide(1000)
})


let products = [
  {
      id: 1,
      title: 'iPhone 12 128GB',
      image: 'https://www.mobilecentre.am/img/prodpic/e5ea1bf3b660b77797001.png',
      price: 550,
      category: 'iphone'
  },
  {
      id: 2,
      title: 'iPhone 15 Plus 256GB',
      image: 'https://www.mobilecentre.am/img/prodpic/44441d8768538942cd8a1.jpg',
      price: 800,
      category: 'iphone'

  },

  {
    id: 3,
    title: 'iPhone 15 Plus 256GB',
    image: 'https://www.mobilecentre.am/img/prodpic/44441d8768538942cd8a1.jpg',
    price: 910,
    category: 'iphone'

},
{
  id: 4,
  title: 'iPhone 14 Plus 512GB',
  image: 'https://www.mobilecentre.am/img/prodpic/70241a0475ce035ca4cf1.png',
  price: 870,
  category: 'iphone'

},
{
  id: 5,
  title: 'iPhone SE 256GB',
  image: 'https://www.mobilecentre.am/img/prodpic/8af9dffa2c52972a609b%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82__83_.png',
  price: 250,
  category: 'iphone'

},

  {
      id: 6,
      title: 'Iphone 13 Pro 128GB',
      image: 'https://www.mobilecentre.am/img/prodpic/f3420ba72e248aef7701131111.png',
      price: 560,
      category: 'iphone'

  },

  {
    id: 7,
    title: 'Samsung Galaxy Z Fold 5 256GB',
    image: 'https://www.mobilecentre.am/img/prodpic/10dcbb44bdcb633ddd391d4d38a5e422af5cee78%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82__30___3_.png',
    price: 900,
    category: 'samsung'
  
  },

{
  id: 8,
  title: 'Samsung Galaxy Z Flip 4 5G 256GB',
  image: 'https://www.mobilecentre.am/img/prodpic/da145a8683e2812b7cd0%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82__2_.png',
  price: 920 ,
  category: 'samsung'

},

{
  id: 9,
  title: 'Samsung Galaxy A54 256GB',
  image: 'https://www.mobilecentre.am/img/prodpic/cdeefba52c5b861976db%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82__51_.png',
  price: 200,
  category: 'samsung'

},

{
  id: 10,
  title: 'Samsung Galaxy S23 FE 256GB',
  image: 'https://www.mobilecentre.am/img/prodpic/fc5eb12587130c80c098%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82__9_.png',
  price: 600,
  category: 'samsung'

},
  {
    id: 11,
    title: 'Xiaomi Poco X4 Pro 5G',
    image: 'https://yerevanmobile.am/media/catalog/product/cache/07720dad39bc68bc6b838050c0f2e34d/p/m/pms_1645778733.99825671.jpg',
    price: 250,
    category: 'xp'

},

{
  id: 12,
  title: 'Xiaomi Poco C40 4GB/64GB',
  image: 'https://www.mobilecentre.am/img/prodpic/202b0226b716a659ca2a%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82__4_.png',
  price: 100,
  category: 'xp'

},
{
  id: 13,
  title: 'Xiaomi Pad 6 8GB/256GB',
  image: 'https://www.mobilecentre.am/img/prodpic/be4420d9dde0ea494938%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82__4_.png',
  price: 220,
  category: 'tablets'

},
{
  id: 14,
  title: 'Xiaomi Pad 6 8GB/256GB',
  image: 'https://www.mobilecentre.am/img/prodpic/8a540a33df6f4093944e%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82__5_.png',
  price: 200,
  category: 'tablets'

},
{
  id: 15,
  title: 'Apple iPad 10.9 Wi-Fi + Cellular 64GB',
  image: 'https://www.mobilecentre.am/img/prodpic/20c3c8a1f2486397da2d%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82__12_.png',
  price: 520,
  category: 'ipad'

},
{
  id: 16,
  title: 'Apple iPad 10.9 Wi-Fi + Cellular 256GB',
  image: 'https://www.mobilecentre.am/img/prodpic/ed6f514e578b478971ba%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82__7___1_.png',
  price: 620,
  category: 'ipad'

},
{
  id: 17,
  title: 'Apple Macbook Air 15 inch M2 512GB SSD',
  image: 'https://www.mobilecentre.am/img/prodpic/8c01260819c714701d7f%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82__3_.png',
  price: 820,
  category: 'macbook'
},
{
  id: 18,
  title: 'Apple Macbook Air 15 inch M2 SSD',
  image: 'https://www.mobilecentre.am/img/prodpic/2655fe96b4d8ea969119%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82__9_.png',
  price: 2500,
  category: 'macbook'

},
{
  id: 19,
  title: 'PC Notebook Lenovo V15 G2 Intel Core i5 ',
  image: 'https://www.mobilecentre.am/img/prodpic/8e4a07454f774bbe54ad%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82__65_.png',
  price: 350,
  category: 'lenovo'

},
{
  id: 20,
  title: 'PC Notebook Lenovo V15 G2 Intel Core i3',
  image: 'https://www.mobilecentre.am/img/prodpic/f0606ee9cedf34d432b9%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82__66_.png',
  price: 300,
  category: 'lenovo'

},
{
  id: 21,
  title: 'PC Notebook Dell VOSTRO 3510 1TB',
  image: 'https://www.mobilecentre.am/img/prodpic/21f59fd5bb2513368736%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82__94_.png',
  price: 350,
  category: 'dell'

},

{
  id: 21,
  title: 'PC Notebook Dell Intel Core i5',
  image: 'https://www.mobilecentre.am/img/prodpic/21f59fd5bb2513368736%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82__94_.png',
  price: 370,
  category: 'dell'
},
]


let productsBox = document.querySelector('#products .row');

function showProducts(products) {
  productsBox.innerHTML = '';
  products.forEach(el => {
      let productBox = document.createElement('div');
      productBox.className = 'col';
      productBox.innerHTML = `
      <section id="product">
         <div class="container">
         <div class="row">
         <div class="col">
         <div class="wrapper">
         <h4>${el.title}</h4>
         <picture>
         <img src='${el.image}'>
         </picture>
         <div class="gin">${(el.price).toFixed(0)} $</div>
         <button class="btn btn-outline-success" type="button" id="seeProduct">See Product</button>
         </div>
         </div>
         </div></div>
          </section>`;
      productsBox.appendChild(productBox)
  })
}

showProducts(products)

let search = document.querySelector('#search')

search.onchange = function(){
  let filteredProducts;
  let categoryValue = "all";
   if(categoryValue != "all"){
      filteredProducts = products.filter(el => el.category == categoryValue && el.title.includes(this.value));
  }
  else{
      filteredProducts = products.filter(el => el.title.toLowerCase().includes(this.value) || el.title.toUpperCase().includes(this.value));
  }
  showProducts(filteredProducts);
}

let iphone = document.querySelector("#iphone")

iphone.onclick = function(){
  let allIphone = products.filter(el=>el.category == "iphone")
  showProducts(allIphone)
}

let samsung = document.querySelector("#samsung")

samsung.onclick = function(){
  let allSamsung = products.filter(el=>el.category == "samsung")
  showProducts(allSamsung)
}

let xp = document.querySelector("#xp")

xp.onclick = function(){
  let allXP = products.filter(el=>el.category == "xp")
  showProducts(allXP)
}

let ipad = document.querySelector("#ipad")

ipad.onclick = function(){
  let allIpads = products.filter(el=>el.category == "ipad")
  showProducts(allIpads)
}

let pad = document.querySelector("#pad")

pad.onclick = function(){
  let allPads = products.filter(el=>el.category == "tablets")
  showProducts(allPads)
}

let macbook = document.querySelector("#macbook")

macbook.onclick = function(){
  let allMacbooks = products.filter(el=>el.category == "macbook")
  showProducts(allMacbooks)
}

let lenovo = document.querySelector("#lenovo")

lenovo.onclick = function(){
  let allLenovo = products.filter(el=>el.category == "lenovo")
  showProducts(allLenovo)
}

let dell = document.querySelector("#dell")

dell.onclick = function(){
  let allDell = products.filter(el=>el.category == "dell")
  showProducts(allDell)
}

let showBtn = document.querySelector("#seeProduct")

let prdId = products.filter(el => el.id == 17)

showBtn.onclick = function (){
  console.log()
}