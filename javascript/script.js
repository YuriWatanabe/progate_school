$(function(){

	/*3.学習言語ホバー機能*/
	$('.languages-box').hover(
	function() {
		$(this).find('p').fadeIn();
	},
	function() {
		$(this).find('p').fadeOut();
	});


	/*2.「もっと詳しく」ボタン*/
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


	/*1.ヘッダーのスクロールナビ*/
	$('a[href^=#]').click(function(){ 
        var speed = 500;
        var href= $(this).attr("href"); 
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });


	/*6.コラム画像ホバー機能*/
    $('.column-image').hover(
    function(){
    	$(this).addClass('zoom');
    	$(this).find('.zoom-black').fadeIn();
    },
    function(){
    	$(this).removeClass('zoom');
    	$(this).find('.zoom-black').fadeOut();
    });


    /*.*/
    





});