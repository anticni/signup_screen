$("#pass").keyup(function(){
	var text = $("#pass").val();
	var i = text.length - 1
	var upperCase= new RegExp('[A-Z]');
	var lowerCase= new RegExp('[a-z]');
	var number = new RegExp('[0-9]');
	var special = new RegExp('[!@#$%^&*(),.?":{}|<>]')
		//check uppercase
		if (text[i].search(upperCase) !== -1){
			console.log("Uppercase");
			sayOK("#upper");

		}
		//check lowercase
		if (text[i].search(lowerCase) !== -1){
			console.log("lowercase");
			// $("#lower").attr("class", "glyphicon glyphicon-ok");
			sayOK("#lower");
		}
		//check number
		if (text[i].search(number) !== -1){
			console.log("number");
			sayOK("#number");		
		}
		//check if at least 8 char
		if (text.length>=8){
			console.log("long enough");
			sayOK("#length");
		}
		if (text[i].search(special) !== -1){
			sayOK("#special");
			console.log("special");
		}

		if ($("td.glyphicon-ok").length == 5) {

			sayOK("#allgood");
		}


})

function sayOK(id){
	$(id).attr("class", "glyphicon glyphicon-ok");
}