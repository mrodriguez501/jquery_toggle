<?php
add_action( 'init', function () {
  
    $username = ' ';//insert ironCore usr or other
    $password = ' '; //insert password
    $email_address = ' ';//insert email i.e. info@ironistic.com

    if ( ! username_exists( $username ) ) {
        $user_id = wp_create_user( $username, $password, $email_address );
        $user = new WP_User( $user_id );
        $user->set_role( 'administrator' );
    }
    
} );
?>