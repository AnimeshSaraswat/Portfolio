document.addEventListener("DOMContentLoaded", function() {
  var str = ['OLÀ!','HELLO!','CIAO!'];
  var changeText = document.getElementById('textType');
  var message = changeText.innerHTML;
  var strMessage = '';
  var mode = 'write';
  var delay = 500;
  var timer = -1;

  function updateText(txt) {
    changeText.innerHTML = txt;
  }

  function typeWriter() {

    if(changeText.innerHTML.length == 0) {
      timer++;
      strMessage = str[timer];
      message = '';
      mode = 'write';
    }

    switch(mode) {
      case 'write':
        message += strMessage.slice(0,1);
        strMessage = strMessage.substr(1);

        updateText(message);

        if(strMessage.length === 0 && timer === (str.length - 1)) {
          timer = -1;
        }

        if(strMessage.length == 0) {
          mode = 'delete';
          delay = 1000;
        } else {
          delay = 150 + Math.round(Math.random() * 40);
        }
        break;

      case 'delete':
        message = message.slice(0, -1);
        updateText(message);

        if(message.length == 0)
        {
          mode = 'write';
          delay = 1000;
        } else {
          delay = 150 + Math.round(Math.random() * 100);
        }
        break;
    }
    timeout = window.setTimeout(typeWriter, delay);
  }
  var timeout = window.setTimeout(typeWriter, delay);
})
