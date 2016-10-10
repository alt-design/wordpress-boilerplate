<?php

    function altThemeSetup()
    {

        /* ----------------------------------------------------
         * Init Helpers
         * ---------------------------------------------------- */
        $Alt = new helpers();

        /* ----------------------------------------------------
         * Register Custom Image Sizes and add theme support for post thumbnail
         * ---------------------------------------------------- */
        add_theme_support('post-thumbnails');
        set_post_thumbnail_size(672, 372, true);
        add_image_size('max', 1920, 1080, false);

        /* ----------------------------------------------------
         * Register Navigation Menu's
         * ---------------------------------------------------- */
        register_nav_menus(array(
            'primary' => __('Main Navigation'),
            'secondary' => __('Secondary Navigation'),
        ));

        /* ----------------------------------------------------
         * Enqueue Front-end Scripts/Styles
         * ---------------------------------------------------- */
        function alt_enqueue_frontend_scripts_styles()
        {
            //  wp_enqueue_script('jquery', null, null, null, true);
            wp_enqueue_script('MainJs', get_template_directory_uri() . '/dist/js/main.js', null, null, true);
            wp_enqueue_style('MainStyles', get_template_directory_uri() . '/dist/css/main.css', null, null, null);
            wp_enqueue_style('FontAwesome', '//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css', null, null, null);
        }

        add_action('wp_enqueue_scripts', 'alt_enqueue_frontend_scripts_styles');

        /* ----------------------------------------------------
         * Enqueue Admin Scripts/Styles
         * ---------------------------------------------------- */
        function alt_enqueue_admin_scripts_styles()
        {
            wp_enqueue_style('admin_css', elixir('css/admin.css'), null, null);
        }

        add_action('admin_enqueue_scripts', 'alt_enqueue_admin_scripts_styles');


        /* ----------------------------------------------------
         * Register Global Options Page
         * ---------------------------------------------------- */
        if (function_exists('acf_add_options_page')) {
            acf_add_options_page('Global Options');
        }
    }

    add_action('after_setup_theme', 'altThemeSetup');

    // REMOVE WP EMOJI
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');

    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('admin_print_styles', 'print_emoji_styles');
