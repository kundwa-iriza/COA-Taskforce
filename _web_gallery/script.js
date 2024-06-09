document.addEventListener('DOMContentLoaded', () => {
   const galleryImages = document.querySelectorAll('.gallery-photo');

   galleryImages.forEach(image => {
       // Create overlay div
       const overlay = document.createElement('div');
       overlay.classList.add('overlay');
       image.appendChild(overlay);

       // Apply filter on mouse enter
       image.addEventListener('mouseenter', () => {
           overlay.style.backgroundImage = image.style.backgroundImage; // Set the same background image
           overlay.style.filter = 'grayscale(0%) blur(0px) hue-rotate(0deg) saturate(100%) brightness(100%) contrast(100%)';
           overlay.style.transform = 'scale(1.05)';
       });

       // Remove filter on mouse leave
       image.addEventListener('mouseleave', () => {
           overlay.style.filter = 'none';
           overlay.style.transform = 'scale(1)';
       });

       // Apply filter on "know more" link hover
       const knowMoreLink = image.querySelector('.know-more');
       knowMoreLink.addEventListener('mouseenter', () => {
           overlay.style.filter = 'grayscale(0%) blur(0px) hue-rotate(0deg) saturate(100%) brightness(100%) contrast(100%)';
           overlay.style.transform = 'scale(1.05)';
       });

       // Remove filter on "know more" link mouse leave
       knowMoreLink.addEventListener('mouseleave', () => {
           overlay.style.filter = 'none';
           overlay.style.transform = 'scale(1)';
       });
   });
});
