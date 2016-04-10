<?php

    $errors = array();
    $data = array();

    // if any of these variables don't exist, add an error to our $errors array
    if (empty($_POST['email']))
        $errors['email'] = 'Email is required.';

    if (empty($_POST['text']))
        $errors['text'] = 'Text is required.';

    // if there are any errors in our errors array, return a success boolean of false
    if ( ! empty($errors)) {
        $data['errors']  = $errors;
    }

    else {
        $to = 'mail@rogatnev.ru'; //mail@yourdomain.com
        $subject = 'You have a message sent from your site';
        $email = $_POST['email'];
        $text = $_POST['text'];
        $headers = 'From: $to';
        $headers .= 'Reply-To: $email';

        // mail foem data
        mail($to, $subject, $text, $headers);

        // show a message of success and provide a true success variable
        $data['success'] = true;
        $data['message'] = 'Success!';
    }

    // return all our data to an AJAX call
    echo json_encode($data);

?>
