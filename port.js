(function () {
  var quotes = $(".quotes");
  var quoteIndex = -1;

  function showNextQuote() {
    ++quoteIndex;
    quotes.eq(quoteIndex % quotes.length)
      .fadeIn(4000)
      .delay(4000)
      .fadeOut(4000, showNextQuote);
  }
  showNextQuote();
})();

// function openPopup() {
//   window.location.hash = 'openModal';
// }

// window.onload = openPopup;


let wrapper = document.querySelector('#contact');
let contact = document.querySelector('#nav-contact');
let nav = document.querySelector('#nav-projects');
let x = document.querySelector("#projects");

function myFunction() {
  console.log(myFunction);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
nav.addEventListener('click', myFunction)


function myWrapper() {
  console.log(myFunction);
  if (wrapper.style.display === "block") {
    wrapper.style.display = "none";
  } else {
    wrapper.style.display = "block";
  }
}
contact.addEventListener('click', myWrapper)





let about = document.querySelector('#about');
let me = document.querySelector('#nav-about');

function myAbout() {
  console.log(myFunction);
  if (about.style.display === "block") {
    about.style.display = "none";
  } else {
    about.style.display = "block";
  }
}
me.addEventListener('click', myAbout)