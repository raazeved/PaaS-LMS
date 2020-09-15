const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventlistener('click', function() {
    const videoId = card.getAttribute("id")/ 
    modalOverlay.classList.add('active')
    modalOverlay.querySelector("iframe").src = 'https://wwww.youtube.com/${videoId}'
  })
}

document.querySelectorAll(".close-modal").addEventlistener("click", function(){
  modalOverlay.classList.remove("active");
  modalOverlay.querySelector("iframe").src ="";
})
