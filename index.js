
var isColorWhite = false;

function myFunction() {
    var x = document.getElementById("logo");
    if (x.style.visibility === "hidden") {
      x.style.visibility = "visible";
    } else {
      x.style.visibility = "hidden";
    }

    var navigator = document.querySelector('.bg-body-tertiary');

  //   if (isColorWhite) {
  //     navigator.style.setProperty('background-color', '#6B3CC9', 'important');
  // } else {
  //     navigator.style.setProperty('background-color', 'white', 'important');
  // }

    var links = document.querySelectorAll('.nav-link');
    links.forEach(function(link) {
      if (isColorWhite) {
        link.style.color = 'white';
      } else {
        link.style.color = 'black';
      }
    }); 

    var toggleIcon = document.querySelector('.navbar');

    if (isColorWhite) {
      toggleIcon.style.setProperty('--bs-navbar-toggler-icon-bg', 'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg>\')');      
    } else {
      toggleIcon.style.setProperty('--bs-navbar-toggler-icon-bg', 'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/></svg>\')');
      
    }
    isColorWhite = !isColorWhite;
  }
