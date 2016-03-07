$(function(){

	$('.languages-box').hover(
	function() {
		$(this).find('p').fadeIn();
	},
	function() {
		$(this).find('p').fadeOut();
	});


	$('#read-more').click(
	function() {
		if($(this).hasClass('active')) {
			$('#more-text').fadeOut();
			$('#read-more').removeClass('active').text("もっと詳しく");
		}
		else {
			$('#more-text').fadeIn();
			$('#read-more').addClass('active').text("閉じる");
		}
	});

	$('a[href^=#]').click(function(){ 
        var speed = 500;
        var href= $(this).attr("href"); 
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });


});