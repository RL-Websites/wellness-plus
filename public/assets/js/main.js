$(document).ready(function () {
	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	$(".toggle-menu").click(function () {
		$(".site__menu__list").toggleClass("show-menu");
		$(".site__header").toggleClass("menu-open");
		$("body").toggleClass("header-open");

		var icon = $(this).find("i");
		if (icon.hasClass("icon-hamburger")) {
			icon.removeClass("icon-hamburger").addClass("icon-cross");
		} else {
			icon.removeClass("icon-cross").addClass("icon-hamburger");
		}
	});

	function updateHeader() {
		if ($(window).scrollTop() >= 50 || window.pageYOffset >= 100) {
			$(".site__header").addClass("sticky");
		} else {
			$(".site__header").removeClass("sticky");
		}
	}

	// Run on page load
	updateHeader();

	// Run on scroll
	$(window).on("scroll", function () {
		updateHeader();
	});

	//Scroll section
	$(".scrollToTop").on("click", function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			"slow"
		);
	});

	// Header Menu JS Code end

	// Header Sticky end

	// 	$("#couponModal")
	// 		.on("show.bs.modal", function () {
	// 			const modalDialog = $(this).find(".modal-dialog");
	// 			modalDialog.addClass("animate-bounceIn");
	// 		})
	// 		.on("hidden.bs.modal", function () {
	// 			const modalDialog = $(this).find(".modal-dialog");
	// 			modalDialog.removeClass("animate-bounceIn");
	// 		});

	const scrollBtn = document.getElementById("scrollRightBtn");
	const tabContainer = document.querySelector(".custom-tabs");

	scrollBtn.addEventListener("click", () => {
		tabContainer.scrollBy({ left: 200, behavior: "smooth" });
	});
});
