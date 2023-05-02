function toggleNav() {
  let nav = document.getElementById("nav");
  let navBtn = document.getElementById("nav-icon");
  navBtn.classList.toggle("fa-xmark");
  navBtn.classList.toggle("fa-bars");
  nav.classList.toggle("isOpen");
}

function openPage(event, pageName) {
  var i, pageContent, navLinks;

  pageContent = document.getElementsByClassName("page");
  for (i = 0; i < pageContent.length; i++) {
    pageContent[i].style.display = "none";
  }

  navLinks = document.getElementsByClassName("nav-item");
  for (i = 0; i < navLinks.length; i++) {
    navLinks[i].className = navLinks[i].className.replace(" active", "");
  }

  document.getElementById(pageName).style.display = "flex";
  event.currentTarget.className += " active";

  let nav = document.getElementById("nav");
  if (nav.classList.contains("isOpen")){
    toggleNav();
  }
}
