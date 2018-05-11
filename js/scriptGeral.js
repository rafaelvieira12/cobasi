$( document ).ready(function() {
		  
	// inicio pagina
	$(".geral").load("views/pedidos.html");

	$("header nav a").click(function(e) {
		e.preventDefault();

		var nome = $(this).attr("href")
		var textoNome = $(this).attr("data-text")

		// coloca marcação no menu
		$("header nav a").removeClass("marcado")
		$(this).addClass("marcado")

		// altera o texto do header
		$("header h1 span").html(textoNome)

		// mostra a página de acordo com menu
		if($(this).attr('href')) {
			$(".geral").load("views/" + nome + ".html");
		}
			  
	});

});