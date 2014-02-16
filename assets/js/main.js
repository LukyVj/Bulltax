$(document).ready(function(){

function bulltax(){
	var $bulltax = $('pre').hasClass('bulltax');

	if($bulltax == true){

	var $bull = $('pre.bulltax'),
		$lang = $bull.find('code');

		if($lang.hasClass('css')){

			var $css = $lang,
			$cssVal = $css.text(),
			$d = $cssVal
			.replace('{','<span class="bracket-op">{</span>')
			.replace('}','<span class="bracket-cl">}</span>')
			.replace('.','<span class="dot">.</span>')
			.replace(':','<span class="db-dots">:</span>');

			$css.empty().html($d);

		}		
	}
}

bulltax();

});