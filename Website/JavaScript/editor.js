jQuery(function($){
    $(".editor").focusout(function(){
        var element = $(this);        
        if (!element.text().replace(" ", "").length) {
            element.empty();
        }
    });
});

$("#title").keypress(function(e){ return e.which != 13; });