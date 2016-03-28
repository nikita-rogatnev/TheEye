$(document).on('ready', function() {
  $modal = $('.modal');
  $overlay = $('.modal-overlay');
  $modal.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
    if ($modal.hasClass('modal--leave')) {
      $modal.removeClass('modal--leave');
    }
  });

  $('.modal__close').on('click', function() {
    $overlay.removeClass('modal--show');
    $modal.removeClass('modal--appear').addClass('modal--leave');
  });

  $('.modal--open').on('click', function() {
    $overlay.addClass('modal--show');
    $modal.removeClass('modal--leave').addClass('modal--appear');
  });

});