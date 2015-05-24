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
           //$("#send").attr({"disabled" : "true", "value" : "Изпращане..." });
           
           $.ajax({
             type: "POST",
             url : "./send.php",    
             data: "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message,
             success: function(data){  
	              if(data == 'success'){
	                console.log(data);
	                $("#btnsubmit").remove();
	                $("#mail_success").fadeIn(500);
              		}else{
              		console.log(data);
	                $("#mail_failed").html(data).fadeIn(500);
	                $("#send").removeAttr("disabled").attr("value", "Изпрати");
              }
             },
		error: function(e) {
		alert("Failed to send request.");
		console.log(e);
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