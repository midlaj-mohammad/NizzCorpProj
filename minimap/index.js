const svgContainer = document.getElementById('svgContainer');


const miniMap = document.querySelector('.mini-map');

const miniMapRect = document.querySelector('.mini-map-rect');

let isDragging = false;
let viewBox = { x: 0, y: 0, width: 1000, height: 600 };


let startingX, startingY;


svgContainer.addEventListener('mousedown', e => {

isDragging = true;
 startingX = e.clientX;

startingY = e.clientY;
});

svgContainer.addEventListener('mousemove', e => {


if (isDragging) {
 const dx = e.clientX - startingX;
 const dy = e.clientY - startingY;
      startingX = e.clientX;
 startingY = e.clientY;

 viewBox.x -= dx;
   viewBox.y -= dy;

 svgContainer.setAttribute('viewBox', 
 `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);
 updateMiniMap();
}});

     svgContainer.addEventListener('mouseup', ()=> {
isDragging = false; });

svgContainer.addEventListener('mouseleave', ()=> {

isDragging = false;
});

svgContainer.addEventListener('wheel', e => {


e.preventDefault();
   const scaleFactor = e.deltaY > 0 ? 1.2 : 0.10;

viewBox.width *= scaleFactor;

  viewBox.height *= scaleFactor;

   svgContainer.setAttribute('viewBox', 
`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);
updateMiniMap();
});

miniMap.addEventListener('click', e => {

 const miniMapWidth = miniMap.clientWidth;

const miniMapHeight = miniMap.clientHeight;

   const clickedX = (e.clientX - miniMap.getBoundingClientRect().left) / miniMapWidth * 800;

const clickedY = (e.clientY - miniMap.getBoundingClientRect().top) / miniMapHeight * 600;



const newViewBoxX = clickedX - viewBox.width / 2;

 const newViewBoxY = clickedY - viewBox.height / 2;

viewBox.x = newViewBoxX;

viewBox.y = newViewBoxY;
          svgContainer.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);
updateMiniMap();
});

function updateMiniMap() {
const miniMapWidth = 200;
 const miniMapHeight = 200;

const rectX = (viewBox.x / 800) * miniMapWidth;
  const rectY = (viewBox.y / 600) * miniMapHeight;
   const rectWidth = (viewBox.width / 800) * miniMapWidth;
const rectHeight = (viewBox.height / 600) * miniMapHeight;
miniMapRect.setAttribute('height', rectHeight);
miniMapRect.setAttribute('x', rectX);

miniMapRect.setAttribute('y', rectY);

miniMapRect.setAttribute('width', rectWidth);

}