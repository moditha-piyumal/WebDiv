$(document).ready(function(){


   $(".acTitle").click(function(){
      $(this).toggleClass("activeH3");
      $(this).next(".acContent").slideToggle();
   });
}
);







$(document).ready(function() {
   // Set the first image as active
   $('#slideshow img:first-child').addClass('active');
 
   // Start the slideshow
   setInterval(function() {
     // Get the current active image
     var activeImg = $('#slideshow img.active');
 
     // Get the next image
     var nextImg = activeImg.next();
 
     // If there is no next image, go back to the first image
     if (nextImg.length == 0) {
       nextImg = $('#slideshow img:first-child');
     }
 
     // Fade out the current active image and fade in the next image
     activeImg.removeClass('active');
     nextImg.addClass('active');
   }, 3000); // Change image every 3 seconds
 });
 




 const hamburger = document.querySelector('.hamburger');
 const nav = document.querySelector('nav ul');
 
 hamburger.addEventListener('click', function() {
   nav.classList.toggle('show');
 });
 







