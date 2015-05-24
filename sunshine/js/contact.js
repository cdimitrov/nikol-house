$(document).ready(function() {
      
	$("#send").click(function() {
        var name   = $("#name").val();
        var email  = $("#email").val();
        var message  = $("#message").val();
		var subject = $("#subject").val();

        var error = false;

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
         
        if(error == false) {
           //$("#send").attr({"disabled" : "true", "value" : "Изпращане..." });
            
/*            $.ajax({
             type: "POST",
             url : "https://api:key-29aa5438836eef41f32815976693a128@api.mailgun.net/v3/mg.nikol-house.com/messages",    
             data: { from: name + "<" + email + ">",  to:"info@nikol-house.com", subject:subject, text:message},
			 //without this xhrFields withCredentials shit it doesn't work!!!
			 xhrFields: {
				withCredentials: true
			 },
			 crossDomain: true,
             success: function(data){    
              if(data == 'success'){
				alert("success: " + data.responseText);
                $("#btnsubmit").remove();
                $("#mail_success").fadeIn(500);
              }else{
                $("#mail_failed").html(data).fadeIn(500);
                $("#send").removeAttr("disabled").attr("value", "Изпрати");
              }     
             },
			error: function(xhr, status, e) {
			console.log(xhr);
			console.log(status);
			console.log(e);
			alert("error: ");
			}			
           }); */ 
		   var test = function (data) {
			alert(data);
		   };
           $.ajax({
             type: "GET",
             url : "https://api:key-29aa5438836eef41f32815976693a128@api.mailgun.net/v3/mg.nikol-house.com/messages",    
             data: { from: name + "<" + email + ">",  to:"info@nikol-house.com", subject:subject, text:message},
			 dataType: "jsonp",
			 crossDomain: true,
			 jsonpCallback: "test",
             success: function(data){    
              if(data == 'success'){
				alert("success: " + data.responseText);
                $("#btnsubmit").remove();
                $("#mail_success").fadeIn(500);
              }else{
                $("#mail_failed").html(data).fadeIn(500);
                $("#send").removeAttr("disabled").attr("value", "Изпрати");
              }     
             },
			error: function(xhr, status, e) {
			console.log(xhr);
			console.log(status);
			console.log(e);
			alert("error: ");
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

 
     /* $(document).ready(function(){
      $("#contact").submit(function(){
        var name   = $("#name").val();
        var email  = $("#email").val();
        var message  = $("#message").val();

        var error = false;

         if(email.length == 0 || email.indexOf("@") == "-1" || email.indexOf(".") == "-1"){
           var error = true;
           $("#error_email").fadeIn(500);
         }else{
           $("#error_email").fadeOut(500);
         }
         if(message.length == 0){
            var error = true;
            $("#error_message").fadeIn(500);
         }else{
            $("#error_message").fadeOut(500);
         }
         
         if(error == false){
           //$("#send").attr({"disabled" : "true", "value" : "Loading..." });
            
           $.ajax({
             type: "POST",
             url : "./send.php",    
             data: "name=" + name + "&email=" + email + "&subject=" + "You Got Email" + "&message=" + message,
             success: function(data){  
				alert("test");
              if(data == 'success'){
                $("#btnsubmit").remove();
                $("#mail_success").fadeIn(500);
              }else{
                $("#mail_failed").html(data).fadeIn(500);
                $("#send").removeAttr("disabled").attr("value", "Изпрати");
              }
             },
							error: function(e) {
			alert("fuck it");
			alert(e.responseText);
			}
           });  
        }
		    return false;                      
      });    
    }); */