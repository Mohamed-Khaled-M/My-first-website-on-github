document.querySelector('#nav-toggle').addEventListener('click', function() {
  const navMenu = document.querySelector('#nav-menu-container');
  navMenu.style.display = navMenu.offsetParent === null ? 'block' : 'none';
});

// TODO: Smooth Scroll

const links = document.querySelectorAll('header a');
links.forEach(link =>
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    window.scrollTo({
      top: document.querySelector(targetId).offsetTop,
      behavior: 'smooth',
    });
  })
);

// TODO: Visual Effect
function isVisible(element) {
  const elementBox = element.getBoundingClientRect().top;
  if (elementBox < window.innerHeight / 1.5) {
    return true;
  }
  return false;
}

const sectionListY = document.querySelectorAll('.hideY');
const sectionListXLeft = document.querySelectorAll('.hideX-left');
const sectionListXRight = document.querySelectorAll('.hideX-right');
function scanDocument() {
  sectionListY.forEach(section => {
    if (isVisible(section)) section.classList.remove('hideY');
  });
  sectionListXLeft.forEach(section => {
    if (isVisible(section)) section.classList.remove('hideX-left');
  });
  sectionListXRight.forEach(section => {
    if (isVisible(section)) section.classList.remove('hideX-right');
  });
}
document.addEventListener('scroll', scanDocument);

// function throttle(fn, wait) {
//   let time = Date.now();
//   return function() {
//     if (time + wait - Date.now() < 0) {
//       fn();
//       time = Date.now();
//     }
//   };
// }

// document.addEventListener('scroll', throttle(scanDocument, 200));
