jQuery(document).ready(function($){
	$('.slider').cycle({
		slides: '>div',
		next: '.next_button',
		prev: '.prev_button',
		fx: 'carousel',
		slideCount: 5
	});

	$('.video_slide').cycle({
		slides: '>div',
		next: '.next',
		prev: '.prev',
		fx: 'carousel',
		slideCount: 2
	});
	
});