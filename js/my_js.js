$(document).ready(function(){$('.bg-image').slick({dots:!0,infinite:!0,speed:300,autoplay:!0,autoplaySpeed:2e3,slidesToShow:1,adaptiveHeight:!0,arrows:!1}),$('.projects_div__cards').slick({centerPadding:'0px',dots:!0,infinite:!1,speed:300,autoplay:!0,autoplaySpeed:600,slidesToShow:3,responsive:[{breakpoint:768,settings:{arrows:!1,centerMode:!0,slidesToShow:2}},{breakpoint:576,settings:{arrows:!1,centerPadding:'0px',slidesToShow:1}}]}),document.addEventListener('DOMContentLoaded',function(){const e=document.querySelector('.nav__bar__horizontal_list--close_btn'),t=document.querySelector('.nav__bar__horizontal_list--nav_list'),n=document.querySelector('.nav__bar__horizontal_list');e.addEventListener('mousedown',function(e){e.preventDefault(),e.target.classList.toggle('open-2'),t.classList.toggle('open'),n.classList.toggle('dropdown',t.classList.contains('open'))},{passive:!0})}),$(window).scroll(function(){if($(this).scrollTop()>$('.main section:nth-of-type(2)').offset().top){$('.contact-button').fadeIn()}else{$('.contact-button').fadeOut(),$('.contact-form').fadeOut()}}),$('#contactBtn').click(function(){$('.contact-form').fadeIn(),$('#contactBtn').fadeOut()}),$('.close-btn').click(function(){$('.contact-form').fadeOut(),$('#contactBtn').fadeIn()}),$('#contactForm').submit(function(e){e.preventDefault(),$('#contactForm')[0].reset(),$('.contact-form').fadeOut()})});
