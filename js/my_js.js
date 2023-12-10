$(document).ready(function() {
    // Function to calculate the position of the second section
    function secondSectionPosition() {
      return $('.main section:nth-of-type(2)').offset().top;
    }
  
    $(window).scroll(function() {
      if ($(this).scrollTop() > secondSectionPosition()) {
        $('.contact-button').fadeIn();
      } else {
        $('.contact-button').fadeOut();
        $('.contact-form').fadeOut();
      }
    });
  
    $('#contactBtn').click(function() {
      $('.contact-form').fadeIn();
      $('#contactBtn').fadeOut();
    });

    $('.close-btn').click(function() {
      $('.contact-form').fadeOut();
      $('#contactBtn').fadeIn();
    });

    $('#contactForm').submit(function(e) {
      e.preventDefault();
      // Handle form submission here
      // Reset form after submission
      $('#contactForm')[0].reset();
      $('.contact-form').fadeOut();
      // You can add a success message or other actions upon successful submission
    });
  });
  