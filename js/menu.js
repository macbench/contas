window.addEventListener("load", ()=>{
    document.body.classList.remove("preload")
})

//Increment code for blur added
let blure = document.querySelector('.overlay_first')
let allMenu = document.querySelector('.nav')

//Increment code for blur added


document.addEventListener("DOMContentLoaded", () =>{
    const nav = document.querySelector('.nav')

    document.querySelector('#btnNav').addEventListener("click", ()=>{
        nav.classList.add("nav--open")
        blure.style.display='block'
        allMenu.style.display='block'


    })

    document.querySelector('.nav__overlay').addEventListener("click", ()=>{
        nav.classList.remove("nav--open")
            blure.style.display='none'
            allMenu.style.display='none'


    })
    document.querySelector('#homePage').addEventListener("click", ()=>{
        nav.classList.remove("nav--open")
            blure.style.display='none'

    })

    document.querySelector('.voltar').addEventListener("click", ()=>{
        nav.classList.remove("nav--open")
            blure.style.display='none'
            allMenu.style.display='none'


    })
    document.querySelector('#mb').addEventListener("click", ()=>{
        nav.classList.remove("nav--open")
            blure.style.display='none'
            allMenu.style.display='none'


    })


})



//This code used to rotate drop icon(-180deg)

$('.li .second').click(function () {
    $('.li .second span').toggleClass("rotate");
});
$('.li .third').click(function () {
    $('.li .third span').toggleClass("rotate");
});


let chx1 = document.querySelector('#btn-3')
let chx2 = document.querySelector('#btn-4')
let btnChx1 = document.querySelector('.second')
let btnChx2 = document.querySelector('.third')


btnChx1.addEventListener("click", ()=>{
    chx2.checked = false
})
btnChx2.addEventListener("click", ()=>{
    chx1.checked = false
})

