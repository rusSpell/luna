$(function () {
    $('.app__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.app__nav',
        autoplay: true,
        autoplaySpeed: 3000,
      });
      $('.app__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.app__slider',
        centerMode: true,
        focusOnSelect: true
      });
      $('.twitter__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1201,
              settings: {
                slidesToShow: 2,
                centerMode: true,
              }
            },
            {
              breakpoint: 901,
              settings: {
                slidesToShow: 1,
                centerMode: true,
              }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
            

          ]



      });

      $(".menu").click(function() { // Тут класс твоей кнопки
        $('.menu__dropdown').slideToggle(300);  // Тут класс твоего меню, предварительно оно "display:none"
      });

      $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $("#menu__dropdown"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.hide(); // скрываем его
		}
    });
    $("#toabout").click(function() { // ID откуда кливаем
        $('html, body').animate({
            scrollTop: $(".about").offset().top  // класс объекта к которому приезжаем
        }, 1000); // Скорость прокрутки
    });

});
AOS.init();