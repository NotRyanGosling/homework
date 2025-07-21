// const burgerMenu = document.querySelector('.burger-icon')
// const modalNav = document.querySelector('.body')
// const nav = document.querySelector('.nav__link')
// const body = document.body

// const openModal = () => {
//     modalNav.classList.add('body--opened-menu')
// }

// const closeModal = () => {
//     modalNav.classList.toggle('body--opened-menu')
// }

// burgerMenu.addEventListener('click', openModal)

// modalNav.addEventListener('click', event =>{
//     const target = event.target
//     if (target&&target.classList.contains('nav__link') || target.classList.contains('burger-icon')){
//         closeModal()
//     }
// })

// document.addEventListener('keydown', event =>{
//     if(event.code === 'Escape' && modalNav.classList.contains('body--opened-menu')){
//       closeModal()  
//     }
// })


(function(){

    document.addEventListener('click', burgerInit)

    function burgerInit(e){

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if(document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')){
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }
})()