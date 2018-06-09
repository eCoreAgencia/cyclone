$(document).ready(function(){
    $('.productShelf').each(function(){
        var esgotado = $(this).find('.outOfStock');
        if($(esgotado).length > 0) {
            window.alert(achei);
            var vovo = $(this).parent();
            vovo.addClass('without-stock');
        }
    });

    // PopUp Button //
        $('.price-info .tabela-de-medidas span').click(function(){
            $('body').addClass('modal-active');
        });
    // PopUp Button //

    // PopUp Modal //
      // Fecha Modal //
        $('.close-modal').click(function(){
          $("body").removeClass("modal-active");
        });
      // Fecha Modal //

      // Fecha Modal na Tecla ESC //
        $(document).keyup(function(ev){
          if(ev.keyCode == 27)
          $("body").removeClass("modal-active");
        });
      // Fecha Modal na Tecla ESC //

    // PopUp Modal //

});
