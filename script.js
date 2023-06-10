
// Cookie modal
//const cookieModal = document.getElementById('modal')
//const modalCloseBtn = document.getElementById('modal-close-btn')


//setTimeout(function () {
    //modal.style.display = 'flex'
//}, 1000)


//modalCloseBtn.addEventListener('click', function () {
    //modal.style.display = 'none'
//}) 

// Icon Popovers

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))