$(document).ready(function () {
    // By class  use "."
    $('.por_class').text('Por classes "."');
    // By ID use "#" 
    $('#por_id').html('<strong>Por ID "#"</strong>');
    // By TAG
    $('h1').text('Por Tag');
    // By Attribute
    $('input[placeholder*=Password]').addClass('highlight');

    // CSS selector
    var result = $('.animais .mamiferos');
    //console.log(result);
    // DOM selector (Faster)
    result = $('.animais').find('mamiferos');
    //console.log(result);

    // CSS selector
    var result = $('.animais > .mamiferos');
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

    // CLICK EVENT func toggle
    $('#blue, #red').on('click', function () {

        // toggleClass -> se não tem a classe ele ADD, se tiver ele Remove
        // uma espécie de light switch ... mas podemos fazer o msm com if else
        // somados ao removeClass e addClass
        $(this).toggleClass('highlight')

    });


    $('.box').on('click', 'button.switch', function () {
        console.log($(this));

        $(this).parent().toggleClass('highlight');
    });



    $(".box").on('click', 'button', function () {
        var selected = $('#place option:selected');
        var value = selected.val();
        //var price = selected.attr('data-price');
        var price = selected.data('price');

        console.log(selected)

        console.log(value);
        console.log(price);
        console.log(selected.attr('data-price'));

        $('#result').html(value + ' ' + price);
    });


    // CHANGE
    $(".box").on('change', 'select', function () {
        var selected = $('#place2 option:selected');
        var value = selected.val();
        var price = selected.data('price');

        $('#result2').html(value + ' ' + price);
    });


    // KEYBOARD EVENTS
    //keydown - Dispara quando você pressiona a tecla
    //keyup - dispara quando você solta a tecla
    $('.box').on('keydown', 'input', function () {
        $('#result3').html('Your name is: ' + $(this).val());
    });

    // DOM - ADD ELEMENTS
    $('#add-container').on('click', 'button', function () {
        var value = $('#add-container input').val();
        //console.log(value);

        var html = '<div class = "item">\
        <div class = "remove">X</div>'
            + value +
            '</div>';

        //console.log(html);

        //Adiciona no fim do HTML (div)
        $('#places-container').append(html);
        //Adiciona no ínicio do HTML (div)
        $('#places-container').prepend(html);
    });

    //DOM - REMOVE ELEMENTS
    //$('#places-container .remove').on('click',function(){
    $('#places-container').on('click', '.remove', function () {

        //var parent = $(this).parent().remove();
        //console.log(parent);
        $(this).parent().remove();
    });


    //DOM - manipulate text
    $('#escrita').on('click', function () {
        //$('#escrita').text('kkkkkkkkkk');
        $('#escrita').html('\
        <h2>TCHARAM</h2>');
    });

    //DOM -  Create atribut in the tag
    $('#escrita').on('click', function () {
        $('#escrita').attr('new-atribute', 12345);

    });


    //ANIMATION - showing and hiding elements
    $('.item-box').on('click', 'a.info-link', function () {

        // Não muda você pra cima da tela
        event.preventDefault();

        //$(this).closest('.item-box').find('.more-info').toggle(1000);
        // Com função no meio...
        $(this).closest('.item-box').find('.more-info').toggle('slow', function () {
            alert('finished');
        });

    })


    //ANIMATION - CSS attribute (opacity)
    $('#example1').on('click', function () {
        // Transparencia # DENTRO DO "{}" vai o CSS
        $(this).animate({ opacity: 0.25 }, 500, function () {
            alert('completed 1 !!!!!');
        });

    });


    //ANIMATION - CSS attribute (move)
    $('#example2').on('click', function () {
        // pequeno
        $(this).animate({
            left: 200,
            width: 40,
        }, 500, function () {
            alert('completed 2 !!!!!');
        });

    });


    //ANIMATION - CSS attribute (move)
    $('#example3').on('click', function () {
        // pequeno
        $(this).animate({
            left: '+= 20',
            width: '+=50',
        }, 800, function () {
            alert('completed 3 !!!!!');
        });

    });




});