//TO DO
// сделать transition слайдов
// написать комментарии  в коде, html, css
// оформить read me



window.addEventListener('DOMContentLoaded', function() {

	'use strict';
	
	// Slider
	
		let slideIndex = 1,  //Параметр текущего слайда
		slides = document.querySelectorAll('.slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.querySelectorAll('.dot');
	
		showSlides(slideIndex);
		setInterval(plusSlides, 3000);

		//функция, показывающая и скрывающая слайды и точки
		function showSlides() {
	
				if (slideIndex > slides.length) { //если мы дошли до последнего слайда
					slideIndex = 1;
				}
				if (slideIndex < 1) { //если мы на первом слайде нажимаем стрелку "назад"
					slideIndex = slides.length;
				}
	
			slides.forEach((item) => item.style.display = 'none'); //скрываем все слайды
			dots.forEach((item) => item.classList.remove('dot-active')); //скрываем точки
	
			slides[slideIndex - 1].style.display = 'block'; //показываем первый слайд (slideIndex = 0)
			dots[slideIndex - 1].classList.add('dot-active'); //показываем первую точку
		}
		//функция, показывающая следующий слайд
		function plusSlides() {
			//showSlides(slideIndex += n); 
			slideIndex += 1;
			showSlides();
		}

		//показываем предыдущий слайд по клику "назад"
		prev.addEventListener('click', function() {
			slideIndex -= 2;
			plusSlides();
		});
		//показываем следующий слайд по клику "вперед"
		next.addEventListener('click', function() {
			plusSlides();
		});

		//делегируем событие клик обертке точек; показываем слайд, который соответствует нажатой точке
		dotsWrap.addEventListener('click', function(event) {
			for (let i = 0; i < dots.length + 1; i++) { //i < dots.length + 1, потому что нам нужно сделать дополнительный проход цикла (если нажата четвертая точка, i = 3, и проход цикла закончится
				//проверяем, что пользователь кликнул именно на точку (event.target имеет класс .dot) и нажата соответствующая точка
				if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
					slideIndex = i;
					showSlides(); //показываем текущий слайд
				}
			}
		});
	
	});