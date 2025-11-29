// put our javascript here
 const hamburgerButtom = document.querySelector ('.hamburger')
 const humbergerList = document.querySelector ('.hamburger-list-container')

 hamburgerButtom.addEventListener('click', () => {
    humbergerList.classList.toggle('hidden')
 })