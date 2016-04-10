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



    /* ------------------------------------------ */
    /*             CONTACT FORM
    /* ------------------------------------------ */
    $('form').submit(function(event) {

        $('.modal__content-item').removeClass('modal__content-item--error'); // remove the error class
        $('.modal__content-error-description').remove(); // remove the error text

        // get the form data
        var formData = {
            'email': $('input[name=email]').val(),
            'text': $('textarea[name=text]').val()
        };

        // process the form
        $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: formData,
            dataType: 'json',
            encode: true
        })

        // using the done promise callback
        .done(function(data) {

            // here we will handle errors and validation messages
            if (!data.success) {

                // handle errors for email
                if (data.errors.email) {
                    $('#email').addClass('modal__content-item--error'); // add the error class to show red input
                    $('#email').prepend('<div class="modal__content-error-description">' + data.errors.email + '</div>'); // add the actual error message under our input
                }

                // handle errors for text
                if (data.errors.text) {
                    $('#text').addClass('modal__content-item--error'); // add the error class to show red input
                    $('#text').prepend('<div class="modal__content-error-description">' + data.errors.text + '</div>'); // add the actual error message under our input
                }
            }

            else {

                // ALL GOOD! just show the success message!
                $('.modal__form').addClass('modal__form--success'); // add the error class to show red input
                $('form').prepend('<div class="modal__content-item modal__content-item--success">' + data.message + '</div>');
            }
        })

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});
