// Function to update link text based on screen width
function updateLinkText() {
  var link = document.getElementById("dynamicLink");
  if (window.innerWidth <= 767) {
    link.textContent = "get resume";
  } else {
    link.textContent = "get my resume offline";
  }
}

// Initial call to set the link text on page load
updateLinkText();

// Event listener for window resize to update link text dynamically
function handleScroll() {
  var arrow = document.getElementById('arrow');
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  var rotation = scrollPercentage * 90;
  arrow.style.transform = 'rotate(' + rotation + 'deg)';
}


window.addEventListener('scroll', handleScroll);
window.addEventListener('touchmove', handleScroll);


