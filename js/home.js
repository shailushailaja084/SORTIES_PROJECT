const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelector('.pre-btn')];

productContainers.forEach((item,i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerwidth = containerDimenstions.width;
    nxtBtn[i].addEventListener('click',() =>{
        item.scrollleft += containerwidth;
    })
    preBtn[i].addEventListener('click', () => {
        item.scrollleft -= containerwidth
    })
})