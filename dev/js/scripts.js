// $.getScript('http://io.vtex.com.br/vtex.js/2.2.0/vtex.min.js');
$(document).ready(function(){
	var cloneImage = $('body.product-v2 .modal img').clone();
	$('<div id="tabela-medidas-mobile"></div>').insertBefore('.product-info');
	cloneImage.appendTo('#tabela-medidas-mobile');
});

$(document).ajaxComplete(function(){
    $('.shelf .flag-discount').each(function(){
    	var guardatxt = $(this).text();
    	var retira = guardatxt.split(/\,/)[0];
    	var convert = parseInt(retira);
      	$(this).text(convert +'%');
    });

    $(".shelf .flag-discount:contains('0')").hide();
    $(".shelf .flag-discount:contains('10')").show();
    $(".shelf .flag-discount:contains('20')").show();
    $(".shelf .flag-discount:contains('30')").show();
    $(".shelf .flag-discount:contains('40')").show();
    $(".shelf .flag-discount:contains('50')").show();
    $(".shelf .flag-discount:contains('60')").show();
    $(".shelf .flag-discount:contains('70')").show();
    $(".shelf .flag-discount:contains('80')").show();
    $(".shelf .flag-discount:contains('90')").show();
});

(function() {
  var method;
  var noop = function() {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    if (!console[method]) {
      console[method] = noop;
    }
  }
});

jQuery.fn.simulateClick = function() {
	return this.each(function() {
		if ('createEvent' in document) {
			var doc = this.ownerDocument,
			evt = doc.createEvent('MouseEvents');
			evt.initMouseEvent('click', true, true, doc.defaultView, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
			this.dispatchEvent(evt);
		} else {
			this.click();
		}
	});
}

$('.secundario').each(function(){
	var encontraPrimeiro = $(this).prev();
	var encontraImg = $(this).find('img');

	if($(encontraImg).length == 0){
		encontraPrimeiro.addClass('important');
	}
});

var body = $('body'),
	htmlBody = $('html, body'),
	$document = $(document),
	header = $('#header'),
	submenuDesktopWrapper = $('.js-submenu-wrap'),
	userSubmenu = $('.submenu-user'),
	sidePanelMobile = $('.side-panel'),
	mobileSubmenu = $('.submenu-mobile'),
	minicart = $('.minicart'),
	slide = $('.slide'),
	slideShelf = $('.slideShelf'),
	slideBrands = $('.slideBrands'),
	carousel = $('.shelf-carousel'),
	backToTop = $('.js-back-to-top'),
	shelf = $('.prateleira'),
	paginatedShelf = $('.prateleira[id*=ResultItems]'),
	orderList = $('.order-list'),
	formNews = $('.newsletter'),
	depCatBus = $('.dep-cat-bus'),
	pagProduto = $('.produto'),
	sidebar = $('.sidebar');

$(function() {

	// Product Remove Empty Shelf //
        if($('body.product-v2 .shelfQVVT li').length < 1){
            $('.shelfQVVT').remove();
        }

        if($('body.product-v2 .shelfSimilares li').length < 1){
            $('.shelfSimilares').remove();
        }
	// Product Remove Empty Shelf //

	// Tabs Shelf Home //
		$('.tabs-destaque a').click(function(){
			$('.tabs-destaque a').removeClass('active');
			var guardaClass = $(this).attr('class');
			var findShelfs = $(this).parent();
			var teste = findShelfs.parent();
			var testeDois = teste.parent();
			var testeTres = testeDois.parent();
			var mamae = testeTres.find('div');
			mamae.removeClass('active');
			$('.prateleiras-destaque div.shelf-'+guardaClass+'').addClass('active');
			$(this).addClass('active');

			$('.slick-next').simulateClick('click');

		});

		$('.tabs-lancamento a').click(function(){
			$('.tabs-lancamento a').removeClass('active');
			var guardaClass = $(this).attr('class');
			var findShelfs = $(this).parent();
			var teste = findShelfs.parent();
			var testeDois = teste.parent();
			var testeTres = testeDois.parent();
			var mamae = testeTres.find('div');
			mamae.removeClass('active');
			$('.prateleiras-lancamento div.shelf-'+guardaClass+'').addClass('active');
			$(this).addClass('active');

			$('.slick-next').simulateClick('click');
		});
	// Tabs Shelf Home //


	// Ajuste Meus Pedidos //
		if (orderList.length > 0) {
			orderList.find('link').remove();
			orderList.find('.page-header').unwrap('.container');
		}
	// Ajuste Meus Pedidos //


	// Quantidade //
		if($('body.product .price-info .plugin-preco').length > 0) {
			$('<span class="tlt-quantidade">Quantidade:</span>').insertAfter('.unidade');
		}
	// Quantidade //


	// Remove Shelf Relacionados Empty //
		$('.shelfRelacionados').each(function(){
			var encontraPrateleira = $(this).find('.prateleira');
			if($(encontraPrateleira).length == 0){
				$('.shelfRelacionados').remove();
			}
		});
	// Remove Shelf Relacionados Empty //


	// BreadCrumb Ajuste Texto //
		try {
			$('.bread-crumb').find('li:first-child a').text('Home');
		} catch (e) {}


	// Remocao de Li HelperComplement Prateleira
		if ($('.helperComplement').length) {
			$('.helperComplement').remove();
		}
	// Remocao de Li HelperComplement Prateleira

	// Arrows Home Shelf //
		$('.prateleiras-home .prev-arrow').click(function(){
			var buceta = $(this).next();
			console.log(buceta);
			var encontraPrimeiro = $(this).next().find('li').first();
			var encontraUltimo = $(this).next().find('li').last();
			encontraUltimo.insertBefore(encontraPrimeiro);
		});

		$('.prateleiras-home .next-arrow').click(function(){
			var encontraPrimeiro = $(this).prev().find('li').first();
			var encontraUltimo = $(this).prev().find('li').last();
			encontraPrimeiro.insertAfter(encontraUltimo);
		});
	// Arrows Home Shelf //

  	// Voltar ao Topo
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 450) {
				$('.js-back-to-top').addClass('active');
			} else {
				$('.js-back-to-top').removeClass('active');
			}
		});

		body.on('click', '.js-back-to-top', function(event) {
		    event.preventDefault();
		    htmlBody.animate({ scrollTop: 0 }, 300);
		});

		body.on('click', '.bt-open-news', function(event) {
		    event.preventDefault();
		    htmlBody.animate({ scrollTop: 3500 }, 300);
		});
  	// Voltar ao Topo


	// Slider
		if (slide.length > 0) {
			slide.slick({
				adaptiveHeight: true,
				autoplay: true,
				autoplaySpeed: 10000,
				pauseOnHover: false,
				arrows: true,
				dots: true,
				draggable: true,
				touchMove: true,
				slidesToShow: 1,
				slidesToScroll: 1
			});
		}
	// Slider

	// slideShelf
		if (slideShelf.length > 0) {
		    $('.home-v2').find('.slideShelf .prateleira').find('ul').slick({
				adaptiveHeight: true,
				autoplay: false,
				arrows: true,
				dots: false,
				mobileFirst: true,
				draggable: true,
				touchMove: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				responsive: [
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 4
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 479,
						settings: {
							slidesToShow: 1
						}
					}
				]
		    });
		}
	// slideShelf

	// Menu SidePanel //
		var sidePanelMobile = $(".side-panel"),
		    header = $("header");
		    header.on("click", ".js-open-mobile-menu", function(event) {
	        event.preventDefault(), sidePanelMobile.addClass("side-panel--open")
	    });

	    header.on("click", ".js-close-mobile-menu", function(event) {
	        event.preventDefault(), sidePanelMobile.removeClass("side-panel--open")
	    });

		$("#menu-mob li.has-sub a.menu-anchor-sidepanel").click(function() {
		  $(this).removeAttr("href");
		  $(this).toggleClass("active");
		  $(this).next().slideToggle();
		});
	// Menu SidePanel //


	// Smart Research //
		if (sidebar.length > 0) {
			try {
				sidebar.find('input[type="checkbox"]').vtexSmartResearch({
					elemLoading: '',
					returnTopText: '',
					elemLoading:'<i class="shelf__loading"></i>',
					filterScrollTop: function(shelfOffset) {
						return 20;
					}
				});
			} catch(e) {}
		}
	// Smart Research //


	// Frete Gratis Aberto //
		try {
			$document.ready(function(){
				$('.shipping-value').simulateClick('click');
			});
		} catch(e) {}
	// Frete Gratis Aberto //


	// Menu Persistente Begin //
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 350) {
				$('header').addClass('menu-persistente');
				$('body').addClass('top-height-active');
			} else {
				$('header').removeClass('menu-persistente');
				$('body').removeClass('top-height-active');
			}
		});
    // Menu Persistente END //
     // Open Modal //
        $('.call_modal').click(function() {
            $('.tabelas').fadeIn(200);
            $('.bg_modal').fadeIn(600);
            $('body').addClass('modal_active');
        });
        // Open Modal //

        // Close Modal //
        $('.close_modal, .bg_modal').click(function() {
            $('.tabelas').fadeOut(600);
            $('.bg_modal').fadeOut(600);
            $('body').removeClass('modal_active');
            $('.modal_loader').remove(); // remove o conteudo do modal ao fechar
        });
        $(document).keyup(function(ev) {
            if (ev.keyCode == 27)
                $('.tabelas').fadeOut(500);
                $('.bg_modal').fadeOut(600);
            $('body').removeClass('modal_active');
            $('.modal_loader').remove(); // remove o conteudo do modal ao fechar
            $('#parcelamentoModal').removeClass('active');
        });
    // Close Modal //
// Scripts Modal //
    // Scripts Pagina de Produto //
	    if (pagProduto.length > 0) {
			try {
				$document.ready(function() {
				// Script Quantidade de Produtos END. Pego a quantidade de produtos pelo val e jogo na URL do botao.
					$('.selecao-sku .more').click(function(){
						var $input = $(this).prev();
						$input.val( +$input.val() + 1 );
						var opt_value = $input.val();
						var link = $(this).next();
						var currentURL = $('.buy-button').attr('href');
						var nomedoproduto = currentURL.split(/\&/)[0];
						$('.buy-button').removeAttr('href');
						$('.buy-button').attr('href', nomedoproduto + '&qty=' + opt_value + '&seller=1&redirect=false&sc=1');
					});

					$('.selecao-sku .less').click(function(){
						var $input = $(this).next();
						$input.val( +$input.val() - 1 );
						var opt_value = $input.val();
						var encontraInput = $(this).next();
						var currentURL = $('.buy-button').attr('href');
						var nomedoproduto = currentURL.split(/\&/)[0];

						$('.buy-button').removeAttr('href');
						$('.buy-button').attr('href', nomedoproduto + '&qty=' + opt_value + '&seller=1&redirect=false&sc=1');
					});
		        // Script Quantidade de Produtos END
				});
			} catch(e) {}
	    }
    // Scripts Pagina de Produto //


  	// Scripts Departamento //
		if($(depCatBus).length > 0){
			// Adicionando classe nos elementos do Ordernar Por quando ativos
			if(window.location.href.indexOf("OrderByTopSaleDESC")!=-1){
				$(".main-category__orderBy li:nth-child(2) a").addClass("active");
			}
			if(window.location.href.indexOf("OrderByReleaseDateDESC")!=-1){
				$(".main-category__orderBy li:nth-child(3) a").addClass("active");
			}
			if(window.location.href.indexOf("OrderByPriceDESC")!=-1){
				$(".main-category__orderBy li:nth-child(4) a").addClass("active");
			}
			if(window.location.href.indexOf("OrderByPriceASC")!=-1){
				$(".main-category__orderBy li:nth-child(5) a").addClass("active");
			}
			// Adicionando classe nos elementos do Ordernar Por quando ativos
		}
  	// Scripts Departamento //


    // Remocao Loading Meus Pedidos//
		try {
			$document.ajaxStop(function() {
				orderList.parents('html').removeClass('is-loading');
			});
		} catch(e) {}
    // Remocao Loading Meus Pedidos//


    // Simulate Click Search //
		try {
			$document.ready(function(){
				$('.btn-search').click(function(){
					$('.btn-buscar').simulateClick('click');
				});
			});
		} catch(e) {}
    // Simulate Click Search //

});
