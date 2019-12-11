// Griglia 6x6, ad ogni click parte una
// richiesta AJAX che prende un
// numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// // Il numero ottenuto appare al centro del quadrato
$(document).ready(function(){
    // Griglia 6x6
    for (var i = 0; i < 36; i++) {
        var quadrato = $(".template .quadrato").clone();
        $(".griglia").append(quadrato);
    }
    // richiesta AJAX che prende un
    // numero random da 1 a 9.
    $(".quadrato").click(function(){
        var that = $(this);
        $.ajax({
            url : "https://flynn.boolean.careers/exercises/api/random/int",
            method : "GET",
            success : function(data) {
                console.log(data);
                var numero = data.response;
                // // Il numero ottenuto appare al centro del quadrato
                that.html("");
                that.append(numero);
                // Se è <= 5 il quadrato diventa giallo,
                if (numero <= 5) {
                    if (that.hasClass("verde")) {

                        that.removeClass("verde");
                        that.addClass("giallo");
                    } else {
                        that.addClass("giallo");
                    }
                    // se è > di 5 il quadrato diventa verde.
                } else {
                    if (that.hasClass("giallo")) {

                        that.removeClass("giallo");
                        that.addClass("verde");
                    } else {
                        that.addClass("verde");
                    }
                }
            },
            error : function() {
                alert("E' avvenuto un errore.");
            }
        })

    })
});
