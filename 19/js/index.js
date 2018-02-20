const videoPlayer = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const drawer = canvas.getContext('2d');
const photoStrip = document.querySelector('.photoStrip');
const snap = document.querySelector('.snap');

function getVideoActive() {
  navigator.mediaDevices.getUserMedia({video: true, audio: false})
  // on fulfilled / granted
  .then(localMedia => {
    console.log(localMedia);
    videoPlayer.src = window.URL.createObjectURL(localMedia);
    videoPlayer.play();
  }) //on error
  .catch(error => {
    console.log(error);
  });
}

// test video camera priveledge
getVideoActive();

// painting video screen to canvas
function paintToCanvas() {
  const width = videoPlayer.videoWidth;
  const height = videoPlayer.videoHeight;
  // cameraCaptureInterval(width, height);
  //resize canvas
  canvas.width = width;
  canvas.height = height;

  // set interval of shooting
  // need return
  setInterval(() => {
    drawer.drawImage(videoPlayer, 0 , 0 , width, height);

    // set filter for video (by using canvas as middleware)
    // resutl pixelImage as array
    let pixelImage = drawer.getImageData(0, 0, width, height);

    // // modif pixel on image: massive red
    // pixelImage = redEffect(pixelImage);
    //
    // // using rgb split
    // pixelImage = rgbSplit(pixelImage);

    drawer.globalAlpha = 0.1;
    pixelImage = greenScreen(pixelImage);
    // put them back
    drawer.putImageData(pixelImage, 0, 0);

  }, 16);
}
// take photo using camera
function takePhoto() {
  snap.currentTime = 0;
  snap.volume = 0.2;
  snap.play();
  // save to image from canvas content
  const data = canvas.toDataURL('image/jpeg');
  // console.log(data);

  // create new element: a href
  const link = document.createElement(`a`);
  link.href = data;
  // set html attributes name : download = "awesome"
  link.setAttribute('download', 'awesome');
  // set link text content
  link.innerHTML = `<img src="${data}" alt="Awesome Image">`;
  // node.insertBefore(newnode, existingnode)
  photoStrip.insertBefore(link, photoStrip.firstChild);
}

videoPlayer.addEventListener('canplay', paintToCanvas);


function redEffect(pixel) {
  for (var i = 0; i < pixel.data.length; i += 4) {
    // pixel[i] // red
    // pixel[i+1] // green
    // pixel[i+2] // blue
    // pixel[i + 3] // alpha
    pixel.data[i + 0] = pixel.data[i + 0] + 100; //red
    pixel.data[i + 1] = pixel.data[i + 1] - 50; //green
    pixel.data[i + 2] = pixel.data[i + 2] + 0.5; //blue
  }
  return pixel;
}

function rgbSplit(pixel) {
  for (var i = 0; i < pixel.data.length; i += 4) {
    // pixel[i] // red
    // pixel[i+1] // green
    // pixel[i+2] // blue
    // pixel[i + 3] // alpha
    pixel.data[i - 150] = pixel.data[i + 0]; //red
    pixel.data[i + 100] = pixel.data[i + 1]; //green
    pixel.data[i - 150] = pixel.data[i + 2]; //blue
  }
  return pixel;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    // saving : redMin = "0"
    levels[input.name] = input.value;
    console.log(levels);
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.redMin
      && green >= levels.greenMin
      && blue >= levels.blueMin
      && red <= levels.redMax
      && green <= levels.greenMax
      && blue <= levels.blueMax) {
      // take it out!
      // make the alpha value to 0% / transparant
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

// function cameraCaptureInterval(videoWidth, videoHeight) {
//   setInterval(() => {
//     drawer.drawImage(videoPlayer, 0, 0, videoWidth, videoHeight);
//   }, 16);
// };
