const burgerMenu = document.querySelector('.burger-icon')
const modalNav = document.querySelector('.body')
const nav = document.querySelector('.nav__link')
const body = document.body

const openModal = () => {
    modalNav.classList.add('body--opened-menu')
}

const closeModal = () => {
    modalNav.classList.toggle('body--opened-menu')
}

burgerMenu.addEventListener('click', openModal)

modalNav.addEventListener('click', event =>{
    const target = event.target
    if (target&&target.classList.contains('nav__link') || target.classList.contains('burger-icon')){
        closeModal()
    }
})

document.addEventListener('keydown', event =>{
    if(event.code === 'Escape' && modalNav.classList.contains('body--opened-menu')){
      closeModal()  
    }
})
