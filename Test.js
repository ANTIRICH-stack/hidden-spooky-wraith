const sections = document.querySelectorAll('.section');
let current = 0;
let isScrolling = false;

window.addEventListener('wheel', (event) => {
  if (isScrolling) return;
  isScrolling = true;

  if (event.deltaY > 0 && current < sections.length - 1) {
    // скролл вниз
    current++;
  } else if (event.deltaY < 0 && current > 0) {
    // скролл вверх
    current--;
  }

  sections[current].scrollIntoView({
    behavior: 'smooth'
  });

  setTimeout(() => {
    isScrolling = false;
  }, 700);
});