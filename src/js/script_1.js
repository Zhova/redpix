$(() => {
	let $document = $(document),
			$gallery = $('.lightboxgallery-gallery'),
			gallery = '.lightboxgallery-gallery-item',
			$galleryItem = $('.lightboxgallery-gallery-item'),
			$galleryRibbon = $('.lightboxgallery-gallery-ribbon'),
			wrap = '<div class="lightboxgallery-gallery-page">',
			screenWidth = screen.width;

// alert(screenWidth);

//count of pictures in slide
	let imageCount = 2;

	if (screenWidth < 540) {
		imageCount = 2
	} else if (screenWidth < 1200) {
		imageCount = 3
	};

//checking with if condition and adding wrap to each imageCount elements
	$galleryItem.length >= imageCount ? $galleryItem.each((i, el) => {
		i % imageCount === 0 ? $galleryItem.slice(i, i + imageCount).wrapAll(wrap) : "wrap"
	}) : console.log('Less than' + imageCount)

//gallery
	$document.on('click', gallery, (event) => {
		event.preventDefault();
		$(event.currentTarget).lightboxgallery({
					showCounter: true,
					showTitle: true,
					showDescription: true
		});
	});

//slider
	let quantity = 4;

	if (screenWidth < 540) {
		quantity = 1
	} else if (screenWidth < 1200) {
		quantity = 3
	};

	$galleryRibbon.slick({
		infinite: true,
		slidesToShow: quantity,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		customPaging: (slider, i) => {
		    var thumb = $(slider.$slides[i + 1]).data();
		    return '<a></a>';
	}
	});





// slider partners
	let $sliderPartners = $('.partners-slider');
	let quantityPartners = 5,
			wrapPartners = '<div class="partners-page">',
			$partnersItem = $('.partners-slider__item'),
			partnersImageCount = 2;

	if (screenWidth < 540) {
		$partnersItem.length >= partnersImageCount ? $partnersItem.each((i, el) => {
		i % partnersImageCount === 0 ? $partnersItem.slice(i, i + partnersImageCount).wrapAll(wrapPartners) : "wrap"
	}) : console.log('Less than' + partnersImageCount)
		quantityPartners = 1
	} else if (screenWidth <= 1024) {
		quantityPartners = 3
	}	else quantityPartners = 5;

	$sliderPartners.slick({
		infinite: true,
		slidesToShow: quantityPartners,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		prevArrow: $('.prev-partners'),
		nextArrow: $('.next-partners'),
		customPaging: (slider, i) => {
		    var thumb = $(slider.$slides[i + 1]).data();
		    return '<a></a>'; 
	}
	});

//dots coloring
	let dots = $('.slick-dots li'),
			activeDot = $('.slick-active'),
			mediumDot = $('.medium')
			activeDot.next().addClass('medium');

	dots.on('click', (event) => {
		$(event.currentTarget).hasClass('slick-active') ? $(event.currentTarget).removeClass('medium') : "active"
		$(event.currentTarget).next().addClass('medium').nextAll().removeClass('medium');
		$(event.currentTarget).prev().addClass('medium').prevAll().removeClass('medium');
	})

	let arrows = $('.slick-arrow')
	$('.slick-arrow').on('click', (event) => {
		dots.removeClass('medium');
	})


//show mobil menu

	$('.mobile-menu').on('click', function() {
		$('.contact-form-back').fadeIn();
		$('.contact-form').fadeIn();
		$('.mobile-menu').fadeOut();
	});

	$('.close').on('click', function() {
		$('.contact-form-back').fadeOut();
		$('.contact-form').fadeOut();
		$('.mobile-menu').fadeIn();
	});



//arrows position
	
	let galleryHeight = $('.lightboxgallery-gallery-page').height(),
			partnersHeight = $('.partners-slider').height(),
			arrowsGallery = $('.next, .prev'),
			arrowsPartners = $('.next-partners, .prev-partners'),
			arrowsGalleryHeight = arrowsGallery.height(),
			arrowsPartnersHeight = arrowsPartners.height();



	arrowsGallery.css('top', galleryHeight / 2 - arrowsGalleryHeight / 2);
	



});