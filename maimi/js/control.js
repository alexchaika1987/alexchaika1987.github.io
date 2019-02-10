
$(function(){
	'use strict';
	$('a[href^="#"]').click(function(){
		let target = $(this).attr('href');
		$('html, body').animate({
			scrollTop:$(target).offset().top
		}
		);
	});
	/* Якоря - а именно при нажатии на элементы
	навигации типа home contacts и т.д
	происходит анимация прокрутки до определенного
	раздела*/
	var offset = $('nav').offset();

	$(window).scroll(function(){
		if( $(window).scrollTop() > offset.top){
			$('#bottom_header').addClass('fixedNav');
				} else {
			$('#bottom_header').removeClass('fixedNav');
				}

	});
	/*Фикцация нашего меню при скроллинге а именно
	выпадание нашей панели  навигации при прокрутке
	и фиксации при дальнейшем продвижении вниз
	лендинга */

	if ( window.innerWidth < 1024) {
	$('#slide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		});
	}else {
		$('#slide').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		});
	}
	/*Тут мы подключаем плагин slick - который необходим
	для того чтобы прокручивать необходимую инфу с
	помощью прокрутки. В нашем случае - в разделе 
	testimonials. Причем услоивие заданно так, что
	при окне ниже 1024 пикселей(для мобильных приложений)
	в категории testimonials показывается один элемент -
	одна известная личность с описанием
	Если же размер больше то три личности в разделе

	Для того чтобы подключить slider, Нам необходимо
	из архива slick скопировать два файла sliсk & 
	slick-theme в файл css. А так же slick.min.js в
	файл js нашего проекта
	*/


	$('#view_all_gallery').click(function(){
		let content = '<div class="gallery_line main_flex__nowrap flex__jcontent_between"><div class="box_img_gallery"><img src="images/1.jpg" alt=""></div><div class="box_img_gallery"><img src="images/2.jpg" alt=""></div></div><div class="name_gallery">Marina Palms / <span class="title_color">North Niami Beach, FL 33162</span></div>';
		$('#gallery_box').append(content);
		$(this).remove();
	});

	/*Работа с кнопкой view all gallery которая добавляет
	блок картинок внизу*/

	$('#modal_box, #black_fill').hide();

	$('#call').click(function(){
		$('#modal_box, #black_fill').show();
	});

	$('#close_modal, #black_fill').click(function(){
		$('#modal_box, #black_fill').hide();
	});
	/*Данные строчки кода позволяет показывать и прятать
	нашу форму order вместе с фоном*/

});