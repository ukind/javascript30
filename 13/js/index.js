const allSliderImage = document.querySelectorAll('.slide-in');

function doSlide(e) {
  allSliderImage.forEach(sliderImage => {
    // window.scrollY: get pixel sing ws kelewat
    // window.innerHeight: get current browser window's height.
    // sliderImage.height : get the image heigh and divide it by two, so the image will shows when 1/2 of image scrolled
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const scannedPage = (scrollPosition + windowHeight);

    // detect the bottom of image
    // offsetTop: return the range (calculated as height) of 'this' element with parrent node
    const rangeImageOfTop = (sliderImage.offsetTop + sliderImage.height);

    const isFilledHalfPage = scannedPage > sliderImage.offsetTop;
    const isNotScrolledPast = scrollPosition < rangeImageOfTop;
    if (isFilledHalfPage && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });

}
// limit the exdecute of function
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this;
    var args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
};

var doSlideEfficient = debounce(function(e) {
  doSlide(e);
}, 20, true);

window.addEventListener('scroll', doSlideEfficient);
