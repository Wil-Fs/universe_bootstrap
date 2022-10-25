$(document).ready(function(){
    
    
    $(window).resize(function(){
        const cards = $(".card-pag");
        var width = $(window).width();
        
        if(width <= 767) {
            cards.removeClass('col-4');
            cards.removeClass('col-6')
        }
        if(width >= 768 && width <= 1023) {
            cards.addClass('col-6');
            cards.removeClass('col-4');
        }
        if(width > 1023) {
            cards.addClass('col-4')
            cards.removeClass('col-6');
        } 
    })
});