<?php

/* ----------------------------------------------------
 * Get the path to a versioned Elixir file.
 *
 * @param  string $file
 * @param  string $buildDirectory
 * @return string
 * ---------------------------------------------------- */
if (!function_exists('elixir')) {
    function elixir($file, $buildDirectory = 'build')
    {
        $manifest = json_decode(file_get_contents(get_template_directory() . ('/dist/' . $buildDirectory . '/rev-manifest.json')), true);
        if (isset($manifest[$file])) {
            return get_template_directory_uri() . '/dist/' . $buildDirectory . '/' . $manifest[$file];
        }
        return 'File Not Found';
    }
}

class helpers
{

    /* ----------------------------------------------------
     * Replaces pesky ' with html entity
     *
     * @param $data
     * @return mixed
     * ---------------------------------------------------- */
    static function alt_json_encode($data)
    {
        return str_replace("'", "&#39;", json_encode($data));
    }

    /* ----------------------------------------------------
     * Dumps the passed variable in a nicely styled <pre></pre>
     * ---------------------------------------------------- */
    static function pre($data)
    {
        echo '<pre>';
        var_dump($data);
        echo '</pre>';
    }
}