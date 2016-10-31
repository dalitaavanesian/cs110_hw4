$(function($) {
  $('.check-button').click(function() {
    $(this).toggleClass('hidden');
    $(this).siblings('.check-button').toggleClass('hidden');
  });

  
});
