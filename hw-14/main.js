const btnOpen = document.querySelector('.btn-open')
// const btnClose = document.querySelector('.modal__close-btn')
const modal = document.querySelector('.modal')
const body = document.body

const openModal = () => {
    modal.classList.add('modal--open')
    body.classList.add('body--fixed')
}

const closeModel = () => {
    modal.classList.toggle('modal--open')
    body.classList.remove('body--fixed')
}


btnOpen.addEventListener('click', openModal)

modal.addEventListener('click', event =>{
    const target = event.target
    if (target && target.classList.contains('modal') || target.classList.contains('modal__close-btn')) {
        closeModel()
    }
})

document.addEventListener('keydown', event =>{
    if(event.code === 'Escape' && modal.classList.contains('modal--open')){
      closeModel()  
    }
})

// btnOpen.addEventListener('click', () => {
//     modal.style.display = 'flex'
// })

// btnClose.addEventListener('click', () =>{
//     modal.style.display = 'none'
// })
