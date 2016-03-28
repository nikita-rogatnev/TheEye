/*
Template Name: Responsive Animated 404 Page
Author: Rogatnev Nikita
Version: 1.0.0
Tags: error, error page, 404, creative, clean, modern, minimal, animated, responsive, dark, oh no, oops
*/


/* ------------------------------------------ */
/*             MODAL BOX
/* ------------------------------------------ */
$(document).on('ready', function() {
	modal = $('.modal');
	var modalbox = document.querySelector(".modal");
	overlay = $('.modal-overlay');
	modal.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
		if (modal.hasClass('modal--leave')) {
			modal.removeClass('modal--leave');
		}
	});
	$('.modal__close').on('click', function() {
		overlay.removeClass('modal--show');
		modal.removeClass('modal--appear').addClass('modal--leave');
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			if (modalbox.classList.contains('modal--appear')) {
				overlay.removeClass('modal--show');
				modal.removeClass('modal--appear').addClass('modal--leave');
			}
		}
	});
	$('.modal--open').on('click', function() {
		event.preventDefault();
		overlay.addClass('modal--show');
		modal.removeClass('modal--leave').addClass('modal--appear');
	});
});