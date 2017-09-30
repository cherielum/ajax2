$(document).ready(function(){
    $('#dog').click(function(){

        $("#dog").text("Generating Doggo...");

        $.get('https://dog.ceo/api/breeds/image/random', function(data){

            var image = $('<img />');
            image.attr('src', data.message);
            $('body').append(image);
            $("#dog").text("Generate Doggo");
            
        });

    })
     
    $.get("https://dog.ceo/api/breeds/list", function(data){
        data.message.forEach(function(breed){

            var option = $('<option></option>');
            option.val(breed);
            option.text(breed);
            $("select").append(option);
        });

    });

    $('select').change(function(){
        var currentlySelectedBreed = $(this).val();
        var url = 'https://dog.ceo/api/breed/'+ currentlySelectedBreed +'/images/random';
        
        $.get(url, function(data){
            var image = $('<img />');
            image.attr('src', data.message);
            $('body').append(image);
        }); 
    })

})