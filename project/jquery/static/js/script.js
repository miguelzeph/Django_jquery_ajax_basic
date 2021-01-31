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

    // CLICK EVENT
    $('#red, #blue').on('click',function(){
        console.log(this.id);
        console.log($(this));

        if( this.id == ('blue' || 'red')){
            $(this).addClass('highlight');
        }
    });



});