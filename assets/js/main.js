'use strict'
const $ = document
 const header =  $.querySelector('header')
 const nav =  $.querySelector('nav')
 const navbarMenuBtn =  $.querySelector('.navbar-menu-btn')

 const navbarFrom = $.querySelector('.navbar-form')
 const navbarFromClose = $.querySelector('.navbar-form-close')
 const navbarFromBtn = $.querySelector('.navbar-search-btn')


 function navisActive () {
    header.classList.toggle('active')
    nav.classList.toggle('active')
    navbarMenuBtn.classList.toggle('active')
 }

 navbarMenuBtn.addEventListener('click' , navisActive)



 const searchBarIsActive = ()=> navbarFrom.classList.toggle('active')

 navbarFromBtn.addEventListener('click' , searchBarIsActive)
 navbarFromClose.addEventListener('click' , searchBarIsActive)
