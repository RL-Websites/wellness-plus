$(document).ready(function () {
	new Swiper(".related_product_slider", {
		spaceBetween: 20,
		loop: true,
		navigation: {
			nextEl: ".product__arrow--left",
			prevEl: ".product__arrow--right",
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},

			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
		},
	});

	new Swiper(".products__filter-btns", {
		spaceBetween: 12,
		loop: false,
		slidesPerView: "auto",
		navigation: {
			nextEl: ".products__filter-right",
			prevEl: ".products__filter-left",
		},
	});

	new Swiper(".feedback__slider", {
		spaceBetween: 20,
		loop: true,
		// autoplay: {
		// 	delay: 2500,
		// 	disableOnInteraction: false,
		// },
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1.5,
				spaceBetween: 15,
				centerInsufficientSlides: true,
			},
			768: {
				slidesPerView: 2,
				centerInsufficientSlides: true,
			},
			992: {
				slidesPerView: 3,
				centerInsufficientSlides: true,
			},
		},
	});

	new Swiper(".mySwiper", {
		slidesPerView: 3,
		spaceBetween: 30,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});

	new Swiper(".home-product-slider", {
		spaceBetween: 20,
		loop: true,
		// autoplay: {
		// 	delay: 2500,
		// 	disableOnInteraction: false,
		// },
		navigation: {
			nextEl: ".product__arrow--right",
			prevEl: ".product__arrow--left",
		},
		breakpoints: {
			0: {
				slidesPerView: 1.3,
				centerInsufficientSlides: true,
			},
			576: {
				slidesPerView: 2,
				centerInsufficientSlides: true,
			},
			992: {
				slidesPerView: 3,
				centerInsufficientSlides: true,
			},
		},
	});
	//Feedback slider end

	// new Swiper(".features__items", {
	// 	spaceBetween: 20,
	// 	loop: true,
	// 	navigation: {
	// 		nextEl: ".features__next-btn",
	// 		prevEl: ".features__prev-btn",
	// 	},

	// 	breakpoints: {
	// 		0: {
	// 			slidesPerView: 1,
	// 		},
	// 		576: {
	// 			slidesPerView: 2,
	// 		},
	// 		768: {
	// 			slidesPerView: 3,
	// 		},
	// 	},
	// });
	//Features slider end

	new Swiper(".product__items--alt", {
		spaceBetween: 20,
		loop: true,

		navigation: {
			nextEl: ".next-arrow",
			prevEl: ".prev-arrow",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1.3,
				spaceBetween: 15,
				centerInsufficientSlides: true,
			},
			768: {
				slidesPerView: 2.2,
				centerInsufficientSlides: true,
			},
			992: {
				slidesPerView: 2.2,
				centerInsufficientSlides: true,
			},
		},
	});
});
