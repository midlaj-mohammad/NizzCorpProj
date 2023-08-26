const svgContainer2 = document.getElementById('svgContainer');
  const myRect = document.getElementById('myRect');
  const myCircle = document.getElementById('myCircle');

  let isDragging = false;
  let startX, startY;
  let viewBox = { x: 0, y: 0, width: 800, height: 600 };

  svgContainer.addEventListener('mousedown', e => {
    if (e.detail === 2) { // Double-click event
      const scaleFactor =-1.2; 

      viewBox.width *= scaleFactor;
      viewBox.height *= scaleFactor;

      svgContainer.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);
    } else {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
    }
  });

  svgContainer.addEventListener('mousemove', e => {
    if (isDragging) {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      startX = e.clientX;
      startY = e.clientY;

      viewBox.x -= dx;
      viewBox.y -= dy;

      svgContainer.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);
    }
  });

  svgContainer.addEventListener('mouseup', () => {
    isDragging = false;
  });

  svgContainer.addEventListener('mouseleave', () => {
    isDragging = false;
  });

  svgContainer.addEventListener('wheel', e => {
    e.preventDefault();
    const scaleFactor = e.deltaY > 0 ? 1.1 : 0.9;

    viewBox.width *= scaleFactor;
    viewBox.height *= scaleFactor;

    svgContainer.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);
  });