var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('style.scss', 'public/css')
		.less('app.less', 'public/cms/css')
		.scripts([
			"jquery-2.1.3.min.js",
			"jquery.magnific-popup.min.js",
		    "slider.js"
		], 'public/js/app.min.js', 'resources/assets/js');
});