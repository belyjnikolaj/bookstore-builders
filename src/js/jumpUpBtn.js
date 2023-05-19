document.querySelector('.jumpUpBtn').addEventListener('click', jumpUpBtn);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    document.getElementById('jumpUpBtn').style.display = '';
  } else {
    document.getElementById('jumpUpBtn').style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
export function jumpUpBtn() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
