
$(document).ready(function(){

	$("#form_sort_order").submit(function(){
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