let btnModalShow = document.querySelector('.btn-modal')
let modal = document.querySelector('.modal-wrapper');
let modalClose = document.querySelector('.modal__close')

let closeModal = () => {
    modal.classList.remove('active');
}

let openModal = () => {
    modal.classList.add('active');
}

btnModalShow.addEventListener("click", () =>{
    openModal();
})

modalClose.addEventListener("click", () =>{
    closeModal();
})

modal.addEventListener("click", (event) => {
console.log(event.target)
console.log(event.currentTarget)
if (event.target==event.currentTarget)  closeModal();
})

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
})