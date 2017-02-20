$(document).ready(function() {

  $('.signin').on('click', function() {
    $('.modal').fadeIn();
  });

  $('.close').on('click', function() {
    $('.modal').fadeOut();
  });

  $('.submit').on('click', function(e) {
    $('input').addClass('error');
    e.stopPropagation();
  });

  $('input').on('click', function() {
    $(this).removeClass('error');
  });

  $('.modal').on('click', function() {
    $(this).fadeOut();
  });

});
