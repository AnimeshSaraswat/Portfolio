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
})();


window.addEventListener('mousewheel', function(e){
  wDelta = e.wheelDelta < 0 ? 'down' : 'up';
  console.log(wDelta);
});
