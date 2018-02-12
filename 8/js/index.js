const divPallete = document.querySelector('#pallete');
// The HTMLCanvasElement.getContext() method returns a drawing context on the canvas, or null if the context identifier is not supported.
const write = divPallete.getContext('2d');

//set current windows dimention and add to div
divPallete.width = window.innerWidth;
divPallete.height = window.innerHeight;
write.strokeStyle = '#FF0000';
write.lineJoin = 'round';
write.lineCap = 'round';
write.lineWidth = 100;

let isDrawing = false;
let positionX = 0;
let positionY = 0;
let hue = 0;
let thickness = true;

divPallete.addEventListener('mousedown', (e) => {
  isDrawing = true;
  //get position of mouse
  // positionX = e.offsetX;
  // positionY = e.offsetY;
  //alternative version
  [positionX, positionY] = [e.offsetX, e.offsetY];
  // console.log(positionX);
});

divPallete.addEventListener('mousemove', drawer);
divPallete.addEventListener('mouseup', function() {
  isDrawing = false;
});
divPallete.addEventListener('mouseout', () => isDrawing = false);

function drawer(e) {
  if (!isDrawing) {
    return;
  }
  // console.log(e);
  //register new path
  write.beginPath();
  // from line 16: hsl(hue, saturation, lightness).
  write.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  //move / start path from this position
  [positionX, positionY] = [e.offsetX, e.offsetY];
  write.moveTo(positionX, positionY);
  //create path when mousedown (calling mouse event: position x n y)
  write.lineTo(e.offsetX, e.offsetY);
  write.stroke();
  //adjust hue color
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  // //adjust line width
  if (write.lineWidth >= 100 || write.lineWidth <= 1) {
    thickness = !thickness;
  }

  if (thickness) {
    write.lineWidth++;
  } else {
    write.lineWidth--;
  }
}
