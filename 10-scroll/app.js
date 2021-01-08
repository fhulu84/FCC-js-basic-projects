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
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', function(){
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if(scrollHeight > navHeight){
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }

  // this value is arbitrary, you can choose it whereever you want to see the top link button
  if(scrollHeight > 500){
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
  link.addEventListener('click', function(e){
    // we want to add more functionality to the existing done by css smooth scroll
    // prevent default
    e.preventDefault();
    // navigate to specific spot, section, skip the hash in the beginning
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    // calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;
    //if navbar is static, not fixed, decrease more
    if(!fixedNav){
      position = position - navHeight;
    }
    // for smaller screens, otherwise it acts the opening menu hasnt been closed after selection, 82 height of navbar
    if(navHeight > 82){
      position = position + containerHeight;
    }
    console.log(position);
    window.scrollTo({
      left: 0, 
      top: position,
    });
    // hide links on smaller screen
    linksContainer.style.height = 0;
  })
})