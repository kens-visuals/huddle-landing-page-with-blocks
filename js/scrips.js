const blocks = document.querySelectorAll('.js-block');

const options = {
  threshold: 0.7,
};

const appearOnScroll = function () {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('block--is-visible');

      observer.unobserve(entry.target);
    });
  }, options);

  blocks.forEach((block) => observer.observe(block));
};

window.addEventListener('DOMContentLoaded', appearOnScroll);
