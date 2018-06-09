$(document).ready(function(){

	$('.my-bag, .portal-totalizers-ref').click(function(){
		$('#ecore-minicart').addClass('active');
	});

	// Funcao que tras todas as informacoes do Checkout da Vtex
		vtexjs.checkout.getOrderForm().done(function(orderForm){

		    var guardaProdutos = orderForm.items; // Guardo todo produto que eh inserido no Carrinho
		    var valorTotal = $('.total-cart-em').text(); // Guardo o Preco

		  	$('#ecore-minicart ul').remove();
		    var montaLista = $('<ul></ul>').appendTo('#ecore-minicart'); // Monto a ul que vai receber a lista de produtos
		  	
		    $('<span class="close-mini-cart">Fechar</span>').insertBefore(montaLista);

		  	// Monto o preco total da compra e gero o botao que redireciona para o carrinho dentro do MiniCart
		    $('<div class="total-price"><span>Total: <em>'+valorTotal+'</em></span><a class="btn continuar">Escolher mais produtos</a><a class="btn fechar-pedido" href="/checkout">Fechar Pedido</a></div>').insertAfter(montaLista);

		    // Guardo os produtos dentro de um each para gerar a li individual, chamando as variaveis que preciso
		    $(guardaProdutos).each(function(orderForm, val){
		      var guardaValorIndividual = val.formattedPrice; // Guardo o preco individual do produto
		      var guardaImg = val.imageUrl;	// Guardo a imagem individual do produto
		      var guardaNome = val.name;	// Guardo o nome individual do produto
		      var guardaUrl = val.detailUrl;	// Guardo a url individual do produto

		      // Monto a lista dos produtos e jogo dentro da variavel MontaLista
		      $('<div class="productItem"><a href='+guardaUrl+'><span class="productImage"><img src='+guardaImg+' /></span><span class="productName">'+guardaNome+'</span><span class="productValue">Valor Unitário: '+guardaValorIndividual+'</span></a></div>').appendTo(montaLista);
		    });

			$('.close-mini-cart').click(function(){
				$('#ecore-minicart').removeClass('active');
			});
		});
	// Funcao que tras todas as informacoes do Checkout da Vtex

	$('.close-mini-cart').click(function(){
		$('#ecore-minicart').removeClass('active');
	});
});