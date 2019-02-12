
$(document).ready(function(){
	$('#form').submit(function(){
	if(document.form.name.value == '' || document.form.phone.value == ''){
		valid = false;
		return valid;

	}
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

