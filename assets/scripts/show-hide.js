$(document).ready(function () {
	/*
	$('.js-feedback-link-1').click(function () {
		$('.js-feedback-text-1').show();
	});
	$('.js-feedback-link-2').click(function () {
		$('.js-feedback-text-2').show();
	});
	$('.js-feedback-link-3').click(function () {
		$('.js-feedback-text-3').show();
	});
	$('.js-close').click(function () {
		$('.feedback-text').hide();
	});
	*/
	// первый отзыв
	$('.js-feedback-link-1').click(function () {
		$('.hide-text').show(200);
		$('.js-feedback-link-1').hide();
		$('.link-hide-text').show();
	});
	$('.link-hide-text').click(function() {
		$('.hide-text').hide(200);
		$('.js-feedback-link-1').show();
		$('.link-hide-text').hide();
	});
	// второй отзыв
	$('.js-feedback-link-2').click(function () {
		$('.hide-text-2').show(200);
		$('.js-feedback-link-2').hide();
		$('.link-hide-text-2').show();
	});
	$('.link-hide-text-2').click(function() {
		$('.hide-text-2').hide(200);
		$('.js-feedback-link-2').show();
		$('.link-hide-text-2').hide();
	});
	// третий отзыв
	$('.js-feedback-link-3').click(function () {
		$('.hide-text-3').show(200);
		$('.js-feedback-link-3').hide();
		$('.link-hide-text-3').show();
	});
	$('.link-hide-text-3').click(function() {
		$('.hide-text-3').hide(200);
		$('.js-feedback-link-3').show();
		$('.link-hide-text-3').hide();
	});
});
