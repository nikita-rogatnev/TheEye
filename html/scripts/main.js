/*
Template Name: The eye - Responsive Animated 404 Page
Author: Rogatnev Nikita
Version: 1.0.0
Tags: error, error page, creative, clean, modern, minimal, animated, responsive, dark, oh no, oops
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


    // Contact Form
    $("#contact").submit(function(e) {
        e.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var text = $("#text").val();
        var dataString = 'name=' + name + '&email=' + email + '&text=' + text;

        function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        };

        if (isValidEmail(email) && (text.length > 100) && (name.length > 1)) {
            $.ajax({
                type: "POST",
                url: "/wp-content/themes/YOURTHEMENAME/functions.php",
                data: dataString,
                success: function() {
                    $('.success').fadeIn(1000);
                }
            });
        } else {
            $('.error').fadeIn(1000);
        }

        return false;
    });







});