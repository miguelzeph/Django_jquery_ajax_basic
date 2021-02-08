$(document).ready(function(){
    
    $("#fruits").sortable({
        connectWith:'#vegetables',
        dropOnEmpty:false
    });

    $("#vegetables").sortable({
        connectWith:'#fruits'
    });
});