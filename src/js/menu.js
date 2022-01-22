const btnMenu = document.getElementById('menu');
const links = document.getElementById('links')

btnMenu.addEventListener('click', () => {
    links.classList.toggle('toggle');
})