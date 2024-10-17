const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

document.getElementById("likeButton").addEventListener("click", function() {
    this.classList.toggle("liked");
});
