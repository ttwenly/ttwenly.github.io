const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal');

if (reduceMotion) {
  reveals.forEach((item) => item.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });
  reveals.forEach((item) => observer.observe(item));
}

const finalButton = document.querySelector('#finalButton');
const finalNote = document.querySelector('#finalNote');
finalButton.addEventListener('click', () => {
  finalNote.hidden = false;
  finalButton.hidden = true;
  finalNote.focus?.();
});
