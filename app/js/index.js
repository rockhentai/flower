$(function() {
  var minLeft = 0,
      maxLeft = $(window).width(),
      minTop = 0,
      maxTop = $(window).height();

  var flower = function(config) {

    this.default = {
      maxWidth:450,
      minWidth:100,
      minAngle:-45,
      maxAngle:45
    }

    this.setting = $.extend(this.default,config);

    var img = new Image();
    img.src = 'ff.gif';

    var width = getRandom(this.setting.minWidth,this.setting.maxWidth);
    var left = Math.random()*(maxLeft-width/2);
    var top = Math.random()*(maxTop-width/2);
    var angle = getRandom(this.setting.minAngle,this.setting.maxAngle);
    var rotateAngle = 'rotate(' + angle + 'deg)';

    $(img).css({
      'width':width,
      'left':left,
      'top':top,
      'transform':rotateAngle
    })
    $('body').append(img);
  }

  function getRandom(min,max) {
      return min + Math.random()*(max-min);
  }

  function boom(num) {
    for(var i=0;i<num;i++) {
      new flower();
    }
  }

  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    boom(50);
  } else {
    boom(300);
  }
})
