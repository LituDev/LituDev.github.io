const callback = function (entries) {
    entries.forEach((entry) => {
  
      if (entry.isIntersecting) {
        entry.target.classList.add("scrolled");
      } else {
        entry.target.classList.remove("scrolled");
      }
    });
};
  
  const observer = new IntersectionObserver(callback);
  
  const targets = document.querySelectorAll(".scroll");
  targets.forEach(function (target) {
    observer.observe(target);
  });