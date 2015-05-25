$(document).ready(function() {
      
	$("#send").click(function() {
        var name   = $("#name").val();
        var email  = $("#email").val();
        var message  = $("#message").val();
        var subject = $("#subject").val();

        var error = false;

	//validation
	if(email.length == 0 || email.indexOf("@") == "-1" || email.indexOf(".") == "-1") {
	   var error = true;
	   $("#error_email").fadeIn(500);
	}
	else {
	   $("#error_email").fadeOut(500);
	}
	
	if(message.length == 0) {
		var error = true;
		$("#error_message").fadeIn(500);
	}
	else {
		$("#error_message").fadeOut(500);
	}
        
        //all fields are correct, then send mail 
        if(error == false) {
           $("#send").attr({"disabled" : "true", "value" : "Изпращане..." });
           
           $.ajax({
             type: "POST",
             url : "./send.php",    
             data: "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message,
             	success: function(data, textStatus, xhr){  
	        	if(xhr.status == 200){
	              		console.log(data);
		                $("#send").removeAttr("disabled").attr("value", "Изпрати");
		                $("#form-output").text("Благодарим Ви за запитването!").css({ 'visibility' : 'visible', 'color' : '#555' });
		                $("#name").val('');
		                $("#email").val('');
		                $("#message").val('');
		                $("#subject").val('');
		                $("#form-output").delay(4500).queue(function (next) { 
				    $(this).css('visibility', 'hidden'); 
				    next(); 
				});
              	      	}else {
              			console.log(data);
	                	$("#send").removeAttr("disabled").attr("value", "Изпрати");
	               		$("#form-output").text("Грешка. Съобщението не беше изпратено.").css({ 'visibility' : 'visible', 'color' : '#C03' });
	                	$("#form-output").delay(4500).queue(function (next) { 
			    		$(this).css('visibility', 'hidden'); 
			    		next(); 
			  	});
              		}
             	},
		error: function(e) {
			console.log(e);
			$("#send").removeAttr("disabled").attr("value", "Изпрати");
	                $("#form-output").text("Грешка. Съобщението не беше изпратено.").css({ 'visibility' : 'visible', 'color' : '#C03' });
	                $("#form-output").delay(4500).queue(function (next) { 
			    $(this).css('visibility', 'hidden'); 
			    next(); 
			  });
		}
           }); 
             
        }
		    
	return false;                      
    }); 

	
	$("#email").blur(function(){
	var email = $("#email").val();
	if (email.length == 0 || email.indexOf("@") == "-1" || email.indexOf(".") == "-1") {
		   $("#error_email").fadeIn(500);
		} 
		else {
		   $("#error_email").fadeOut(500);
		}
	});
	
	$("#message").blur(function(){
	var message = $("#message").val();
	if (message.length == 0) {
		   $("#error_message").fadeIn(500);
		} 
		else {
		   $("#error_message").fadeOut(500);
		}
	});
});