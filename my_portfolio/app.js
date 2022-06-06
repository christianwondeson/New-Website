$("#banner").mousemove(function (e) {
  if(moveX > 0 && moveX <100)
  var moveX = (e.pageX * -1) / 2 + 300;
  var moveY = (e.pageY * -1) / 3 + 120;
  $("#drone-box").css({
    transform: "translate3d(" + moveX + "px, " + moveY + "px, 0)",
  });
});
//jquery code used to counter the drone ctual position and calculate the position estimation
