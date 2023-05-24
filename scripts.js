const imageContainer = document.querySelector('#listado-propiedades');
let isMouseDown = false;
let startX;
let scrollLeft;

imageContainer.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.pageX - imageContainer.offsetLeft;
  scrollLeft = imageContainer.scrollLeft;
});

imageContainer.addEventListener('mouseleave', () => {
  isMouseDown = false;
});

imageContainer.addEventListener('mouseup', () => {
  isMouseDown = false;
});

imageContainer.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.pageX - imageContainer.offsetLeft;
  const walk = (x - startX) * 3; // Ajusta la velocidad de desplazamiento
  imageContainer.scrollLeft = scrollLeft - walk;
});

const menu = document.getElementsByClassName('cont-header-section1');
const sidebar = document.getElementsByTagName('nav');
const icon = document.getElementById('icon-menu');


function toggleMenu() {
  console.log("click");
  document.querySelector("icon-menu").classList.toggle("hidde")
  document
}




  