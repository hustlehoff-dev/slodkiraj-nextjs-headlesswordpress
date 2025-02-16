<?php
function child_theme_script() {
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
}
add_action('wp_enqueue_scripts', 'child_enqueue_styles');

function create_sections_slodkiraj() {
    register_post_type('sections', array(
        'labels' => array(
            'name' =>__('Sections'),
            'singular_name' =>__('Section')
        ),
        'public' => true,
        'has_archive' => false,
        'supports' => array('title','editor','thumbnail','excerpt'),
        'show_in_rest' => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'section',
        'graphql_plural_name' => 'sections',
    ));
}
add_action('init','create_sections_slodkiraj');

function add_images_categories() {
    register_taxonomy_for_object_type('category', 'attachment');
}add_action('init','add_images_categories');