$(document).ready(function(){

function bulltax(){
	var $bulltax = $('pre').hasClass('bulltax');

	if($bulltax == true){

	var $bull = $('pre.bulltax'),
		$lang = $bull.find('code');

		// UI fix
		// It give the class of the children (code) to the parent class ($this = pre), so pre = pre.bulltax.html / pre.bulltax.css / pre.bulltax.js
		$bull.each(function () {
			var $this = $(this),
			$childClass = $this.find('code').attr('class');
			$this.addClass($childClass);
		});


			// HTML syntax
			var $lang = $('pre.bulltax code.html');
			$html = $lang,
			$htmlVal = $html.text(),
			$a = $htmlVal
			.replace('<','<span class="lt">&lt;</span>')
			.replace('>','<span class="gt">&gt;</span>');

			$html.empty().html($a);


			// CSS syntax
			var $lang = $('pre.bulltax code.css');
			$css = $lang,
			$cssVal = $css.text(),
			$b = $cssVal
			.replace('{','<span class="bracket-op">{</span>')
			.replace('}','<span class="bracket-cl">}</span>')
			.replace('.','<span class="dot">.</span>')
			.replace(':','<span class="db-dots">:</span>');

			$css.empty().html($b);


			//Javascript syntax
			var $lang = $('pre.bulltax code.javascript');
			$js = $lang,
			$jsVal = $js.text(),
			$c = $jsVal
			.replace('{','<span class="bracket-op">{</span>')
			.replace('}','<span class="bracket-cl">}</span>')
			.replace('.','<span class="dot">.</span>')
			.replace(':','<span class="db-dots">:</span>');

			$js.empty().html($c);
		

	}
}

bulltax();

});