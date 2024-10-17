const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

document.getElementById("likeButton").addEventListener("click", function() {
    this.classList.toggle("liked");
});

$("#top").lettering();
$("#bottom").lettering();


var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
  
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var classname = document.getElementsByClassName("confetti-button");
  
  for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', animateButton, false);
  }