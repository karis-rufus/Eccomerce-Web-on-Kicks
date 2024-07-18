const wrapper = document.querySelector(".sliderWrapper");
 const menuItems = document.querySelectorAll(".menuItem");

 

  const products = [
    {
        id: 1,
        title: "Air Force",
        price: 3500,
        colors: [
            {code: "black",
            img: "img/air1.jpg",
        },
        {
            code: "darkblue",
            img: "img/airmix.jpg",
        },
        ],
    },
    {
        id: 2,
        title: "Jordan",
        price: 2500,
        colors: [
            {
                code: "red",
            img: "./img/j4wr.jpg",
        },
        {
            code: "green",
            img: "./img/j4green.jpg",
        },
        ],
    },
    {
        id: 3,
        title: "Vans",
        price: 1500,
        colors: [
            {code: "white",
            img: "img/vanswhite.jpg",
        },
        {
            code: "gray",
            img: "img/vansgray.jpg",
        },
        ],
    },
    {
        id: 4,
        title: "Trainer",
        price: 4500,
        colors: [
            {code: "green",
            img: "./img/trainergreen.jpg",
        },
        {
            code: "orange",
            img: "./img/trainersorange.jpg",
        },
        ],
    },
    {
        id: 5,
        title: "Air Max",
        price: 2500,
        colors: [
            {
                code: "purple",
                img: "img/maxpurple.jpg",
        },
        {
            code: "red",
            img: "img/maxred.jpg",
        },
        ],
    },

  ];
  let choosenProduct = products[0];
  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productprice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");
  menuItems.forEach((item, index)=>{
    item.addEventListener("click", () => {
        //change the current slide
 wrapper.style.transform = `translateX(${-100 * index}vw)`;
 //chage the choosen product
 choosenProduct = products[index];
 //change texts of currentProduct
 currentProductTitle.textContent = choosenProduct.title;
 currentProductPrice.textContent = "ksh" + choosenProduct.price;
 currentProductImg.src = choosenProduct.colors[0].img;
//assigning new colors
 currentProductColors.forEach((color, index) => {
    color.style.backgroundColor = choosenProduct.colors[index].code;
 })
    });
  });
currentProductColors.forEach((color, index)=>{
color.addEventListener("click", ()=>{
    currentProductImg.src = choosenProduct.colors[index].img
});
});
currentProductSizes.forEach((size, index)=>{
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor = "white";
            size.style.color = "black";  
        })
        size.style.backgroundColor = "black";
        size.style.color = "white";
    })
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=>{
    payment.style.display = "flex"
});
close.addEventListener("click", ()=>{
    payment.style.display = "none"
});