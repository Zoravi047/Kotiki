const images = document.querySelectorAll('img');

images.forEach((img) => {
  img.addEventListener('mouseover', () => {
    img.style.transform = 'rotate(360deg)';
    img.style.transition = 'transform 1s';
  });

  img.addEventListener('mouseout', () => {
    img.style.transform = 'rotate(0deg)';
    img.style.transition = 'transform 1s';
  });
});
