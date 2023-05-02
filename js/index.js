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

const sendEmailBtn = document.getElementById("submit-btn");

document.getElementById("form").addEventListener('submit', function(event) {
  event.preventDefault();

  sendEmailBtn.value = 'Sending...';

  const serviceID = 'default_service';
  const templateID = 'template_sjz51iv';

  emailjs.sendForm(serviceID, templateID, this).then(() => {
    sendEmailBtn.value = 'Send Email';
    alert('Sent!');
  }, (err) => {
    sendEmailBtn.value = 'Send Email';
    alert(JSON.strinify(err));
  });
});
