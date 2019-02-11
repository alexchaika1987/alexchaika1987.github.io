
$(document).ready(function(){

	$("#orderButton").submit(function(){
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function(){
			alert("Спасибо за заявку! Скоро мы с вами свяжемся");
		});
		return false; 
	});
});