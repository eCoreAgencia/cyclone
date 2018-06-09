$(document).ready(function(){
	$("#___rc-p-id").each(function(index) {
	  var id = $(this).attr("value");
	  var storeName = "cycloneprodutos.vtexcommercestable.com.br";
	  var data = "http://" + storeName + "/api/catalog_system/pub/products/search/?fq=productId:"+id+"";

	  $.getJSON(data, function(data) {
	    $.each(data, function(key, val) {
	      var guardaInfoIngredientes = val.ingredientes[0];
	      $('<div class="composicao-info row"><h2 class="tlt-row">Composição</h2><br /><p>'+guardaInfoIngredientes+'</p></div>').insertAfter('.productDescription');
	    });
	  });
	});
});