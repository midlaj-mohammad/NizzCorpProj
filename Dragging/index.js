 // javascript code Drag
 let selectedElement = null;


 let offset = { x: 0, y: 0 };

 function handleMouseDown(e) {

   if (e.target.classList.contains('draggable')) {
     
         selectedElement = e.target;
     
     
         const bbox = selectedElement.getBoundingClientRect();


  offset.x = e.clientX - bbox.left;
      offset.y = e.clientY - bbox.top;
   }
 }

 function handleMouseUp() {

   selectedElement = null;

 }

 function handleMouseMove(e) {


   if (selectedElement) {
     e.preventDefault();

      const newX = e.clientX - offset.x;
     const newY = e.clientY - offset.y;
     selectedElement.setAttribute('x', newX);
     selectedElement.setAttribute('y', newY);
   }
 }

     const svgContainer = document.getElementById('svgContainer');
    svgContainer.addEventListener('mousedown', handleMouseDown);
    svgContainer.addEventListener('mouseup', handleMouseUp);
   svgContainer.addEventListener('mousemove', handleMouseMove);

//  pan and add zoom 

