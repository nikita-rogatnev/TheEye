<?php




if ( isset($_POST['email']) && isset($_POST['text']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ) {

  // detect & prevent header injections
  $test = "/(content-type|bcc:|cc:|to:)/i";
  foreach ( $_POST as $key => $val ) {
    if ( preg_match( $test, $val ) ) {
      exit;
    }
  }

  $to = "mail@rogatnev.ru"; //mail@yourdomain.com

  $headers = "From: $from";
  $subject = "You have a message sent from your site";
  $from = $_POST['email'];
  $text = $_POST['text'];

  //send email
  $send = mail($to, $subject, $body, $headers);

}
?>
