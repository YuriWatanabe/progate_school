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


    /*7.コラム絞り込み*/
    $(".filter-item").click(function() {
        var tags = $(this).attr('id');
        $(".filter-item").removeClass('active');
        $(this).addClass('active');

        if(tags == 'all') {
            $(".column-box").show();
        } else if(tags == 'column') {
            $('.column-box-wrapper .column').show();
            $('.column-box-wrapper .tip').hide();
        } else {
            $('.column-box-wrapper .tip').show();
            $('.column-box-wrapper .column').hide();
        }
    });

    /*4.申し込みモーダル*/
    $('.btn-pricing').click(function() {
    	$('#apply-modal').fadeIn();
    	var id = $(this).parents('.price-column').attr('id');
    	var title = $('#' + id).find('h2').text();
    	$('#course-select').val(id);
    	$('#apply-form').find('h2').text('【' + title + '】に申し込む');
    });

    $('#close-modal').click(function() {
    	$('#apply-modal').fadeOut();
    });

    /*8.フォーム機能*/





});