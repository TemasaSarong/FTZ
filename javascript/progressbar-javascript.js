<<<<<<< HEAD
=======
// JavaScript Document
>>>>>>> 907a264abf5cce5bc4f42fb79a1358f2d7ffcd32
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
<<<<<<< HEAD
    var width = 10;
=======
    var width = 1;
>>>>>>> 907a264abf5cce5bc4f42fb79a1358f2d7ffcd32
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
<<<<<<< HEAD
        elem.innerHTML = width  + "%";
=======
>>>>>>> 907a264abf5cce5bc4f42fb79a1358f2d7ffcd32
      }
    }
  }
}