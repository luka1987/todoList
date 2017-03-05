$('ul').on('click', 'li', function(){
	$(this).toggleClass('complited');
});

//click on X to delete Todo
$('ul').on('click', 'span', function(event){
	$(this).parent().remove();
	event.stopPropagation();
})

$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val('');
		//create a new li and add to ul
		$('ul').append("<li><span><i class = 'fa fa-trash'></i></span> " + todoText + "</li");
}
})

$('.fa-plus').click(function(){
	$("input[type = 'text']").fadeToggle();

});