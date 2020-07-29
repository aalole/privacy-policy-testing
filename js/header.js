const backdrop = document.querySelector('.backdrop');

function openNav() {
  document.getElementById("mySidenav").style.width = "70%";
  backdrop.style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  backdrop.style.display = "none";
}