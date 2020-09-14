const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
  card.addEventlistener("click",function(){
    modalOverlay.classList.add("active")
  })
}

document.querySelectorAll(".close-modal").addEventlistener("click",function(){
  modalOverlay.classList.remove("active")
})

