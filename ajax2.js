$(function() {    //only open function when document is ready - document.ready
	$("#button").click(function(data) {
		//make the button text change to "Generating Doggo.."
		$("#button").text("Generating Doggo");
		$.get('https://dog.ceo/api/breeds/image/random', function(data) {  //MAKING "SEND" request here. 

			// $('#button').html('<img src =" ' + data.message + '" />');  // this line changes button into dog image

			var image = $('<img/>'); 
			image.attr('src', data.message);
			$('body').append(image);

			//make the button text go back to "generate doggo" 
			$("#button").text("Generate Doggo")
			
		console.log(data.message); //pure data --the URL to an image
	});

})

// Using JQuery, make a GET request to https://dog.ceo/api/breeds/list when the page first loads
		$.get("https://dog.ceo/api/breeds/list", function(data) {
			// for(var i= 0; i<=data.message.length; i++) {
			// )
				data.message.forEach(function(breed) {
				// In the callback function of the GET request, loop through the array of dog breeds that are in the "data" parameter
				// For each dog breed, add a <option value="pitbull">Pit Bull</option> to the <select> tag
				var option = $('<option><</option>');
				option.val(breed); 
				option.text(breed); 
				$("select").append(option);   //$("select").append("<option value= '" + breed + "'>" + breed + "</option>");
		

				// Using JQuery, add a change listener to the select dropdown, like so: .change(function(){})
				
				$('select').change(function(){
					var currentlySelectedBreed= $(this).val();
					// In the callback function, make a GET request to /api/breed/{breed name}/images/random (replacing {breed name} with the currently selected breed)
					var url = "https://dog.ceo/api/breed/" + currentlySelectedBreed + "/images/random";
					$.get(url, function(data) {

						var image = $('</img/>');
						image.attr('src', data.message);
						$("body").append(image);
					});

			});

