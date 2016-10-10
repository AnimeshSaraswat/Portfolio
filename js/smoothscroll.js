window.smoothScroll = (function() {
  var timer, start, factor;

  return function(target, duration) {
    var offset = window.pageYOffset,
    delta = target - window.pageYOffset;  // Y-offset difference
    duration = duration || 1000;          // default 2s animation
    start = Date.now();                   // getting the start time
    factor = 0;

    if (timer) {
      clearInterval(timer); // stop any running animation
    }

    function step() {
      var y;
      factor = (Date.now() - start) / duration;
      if (factor >= 1) {
        clearInterval(timer);
        factor = 1;
      }
      y = factor * delta + offset;
      window.scrollBy(0, y - window.pageYOffset);
    }
    timer = setInterval(step, 10);
    return timer;
  }
  var something = (function() {
    var executed = false;
    return function () {
      if (!executed && window.pageYOffset > 2070) {
        executed = true;
        document.getElementById('linkedin').classList.add('zoomInUp');
        document.getElementById('github').classList.add('zoomInLeft');
        document.getElementById('gmail').classList.add('zoomInDown');
        document.getElementById('facebook').classList.add('zoomInRight');
      }
    };
  })();
})();


window.addEventListener('mousewheel', function(e){
  var head = document.getElementById('header');
  wDelta = e.wheelDelta < 0 ? 'down' : 'up';
  if (wDelta == 'down') {
    head.classList.add('head--pinned');
  }
  else {
    head.classList.remove('head--pinned');
  }
});
