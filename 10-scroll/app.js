// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
  // this might be a comcern if the links count changes, not enough size or more than needed, since height is set static
  // linksContainer.classList.toggle('show-links');

  // set the height dynamically
  // with links-container wrapper div we can hide the links initially by setting its height to 0, but links height is still available to get the size of links area 
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  
  if(containerHeight === 0){ //means default setup, we gonna show the links
    linksContainer.style.height = `${linksHeight}px`;
  } else { // we gonna hide the links
    linksContainer.style.height = 0;
  }

  // here we are changing inline style so it has the highest priority, so when screen size changed we need to set the styling for links-container's height as auto with !important keyword
  /// .links-container {
  //   height: auto !important;
  // }
  
})
// ********** fixed navbar ************

// ********** smooth scroll ************
// select links
