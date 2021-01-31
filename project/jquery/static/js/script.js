$(document).ready(function(){
    // By class  use "."
    $('.por_class').text('Por classes "."');
    // By ID use "#" 
    $('#por_id').html('<strong>Por ID "#"</strong>');
    // By TAG
    $('h1').text('Por Tag');
    // By Attribute
    $('input[placeholder*=Password]').addClass('highlight');

    // CSS selector
    var result = $('.animais .mamiferos') ;
    //console.log(result);
    // DOM selector (Faster)
    result = $('.animais').find('mamiferos');
    //console.log(result);

    // CSS selector
    var result = $('.animais > .mamiferos') ;
    //console.log(result.text());
    //console.log(result);

    // DOM selector (Faster)
    result = $('.animais').children('mamiferos');
    //console.log(result);
    //console.log(result.text());

    // Firs(),last()
    var result = $('.animais > .mamiferos').children().last();
    //console.log(result);

    var result = $('#dog').parent();
    //console.log(result);

    // CLICK EVENT EXE por ID

    /*
    $('#blue, #red').on('click',function(){
        console.log(this.id);
        console.log($(this));

        if (this.id == 'red' || 'blue') {
            $(this).addClass('highlight');
        }

    });
    */

    $('#blue, #red').on('click',function(){
    
    // toggleClass -> se não tem a classe ele ADD, se tiver ele Remove
    // uma espécie de light switch ... mas podemos fazer o msm com if else
    // somados ao removeClass e addClass
    $(this).toggleClass('highlight')

});





});