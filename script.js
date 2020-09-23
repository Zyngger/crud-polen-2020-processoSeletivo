$(function () {
	var tabelaOngs = localStorage.getItem("tabelaOngs");// recuperação dos dados armazenados

	tabelaOngs = JSON.parse(tabelaOngs); // conversão de string p objeto

	var op = "Add"; //utilizada para definir se o usuário está adicionando ou editando um registro.  Add para Adicionar nova Ong e Edit para EditarONG uma Ong

	var indice = -1; //indice > para referenciarmos o registro selecionado na tabela, iniciamos com o valor recuperado do local storage (salvo com a chave “tabelaOngs”)

	if (tabelaOngs == null) // Vetor vazio para nenhuma inserção de dados
		tabelaOngs = [];


	function AdicionarONG() {
		var ong = JSON.stringify({
			NomeOng: $("#txtNomeOng").val(),
			Slogan: $("#txtSlogan").val(),
			Site: $("#txtSite").val(),
		});

		tabelaOngs.push(ong);

		localStorage.setItem("tabelaOngs", JSON.stringify(tabelaOngs)); //setItem para amarzenar uma valor no localStorage e JSON.stringifyesta para transformar o objeto em string.
		return true;
	}

	function ExcluirONG() {
		tabelaOngs.splice(indice, 1);
		localStorage.setItem("tabelaOngs", JSON.stringify(tabelaOngs)); // setItem para amarzenar uma valor no localStorage e JSON.stringifyesta para transformar o objeto em string.
	}

	function EditarONG() {
		tabelaOngs[indice] = JSON.stringify({
			NomeOng: $("#txtNomeOng").val(),
			Slogan: $("#txtSlogan").val(),
			Site: $("#txtSite").val(),

		});
		localStorage.setItem("tabelaOngs", JSON.stringify(tabelaOngs)); //setItem para amarzenar uma valor no localStorage e JSON.stringifyesta para transformar o objeto em string.
		op = "Add";
		return true;
	}


	function ListarONG() {
		$("#tabelaListaOngs").html("");
		$("#tabelaListaOngs").html(
			"<table class='table'>" +
			"<thead>" +
			"	<tr>" +
			"<th scope='col'>Nome Ong</th>" +
			"<th>Slogan</th>" +
			"<th>Site</th>" +
			"<th>Ativa</th>" +
			"<th>Config<th>" +
			"</tr>" +
			"</thead>" +
			"<tbody>" +
			"</tbody>"
		);

		for (var i in tabelaOngs) {
			var ong = JSON.parse(tabelaOngs[i]);

			$("#tabelaListaOngs tbody").append("<tr>" +
				"	<td>" + ong.NomeOng + "</td>" +
				"	<td>" + ong.Slogan + "</td>" +
				"	<td>" + ong.Site + "</td>" +
				"	<td> <input type='checkbox' class='form - check - input' value=1> </td>" +
				"	<td><button type='button' alt='" + i + "' class='btn btnEditar btn-outline-success'  data-toggle='modal' data-target='#exampleModal'/>Editar </button><button type='button' alt='" + i + "' class='btn btn-danger btnExcluir'/>Excluir </button></td>" + "</tr>");
		}
	}



	function GetOng(propriedade, valor) {
		var ong = null;
		for (var item in tabelaOngs) {
			var i = JSON.parse(tabelaOngs[item]);
			if (i[propriedade] == valor)
				ong = i;
		}
		return ong;
	}

	ListarONG();

	$("#formCadastroOngs").on("submit", function () {
		if (op == "Add")
			return AdicionarONG();
		else
			return EditarONG();
	});

	$("#tabelaListaOngs").on("click", ".btnEditar", function () {

		op = "Edit";
		indice = parseInt($(this).attr("alt")); //JSON.parse para transformar String em Objeto
		var ong = JSON.parse(tabelaOngs[indice]); //JSON.parse para tranformar String em Objeto
		$("#txtNomeOng").val(ong.NomeOng);
		$("#txtSlogan").val(ong.Slogan);
		$("#txtSite").val(ong.Site);


	});

	$("#tabelaListaOngs").on("click", ".btnExcluir", function () {
		indice = parseInt($(this).attr("alt"));//JSON.parse para tranformar String em Objeto
		ExcluirONG();
		ListarONG();
	});

});
$(function () {
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 30){
      $("body").addClass("sticky-header");
    }else{
      $("body").removeClass("sticky-header");
    }//if-else
  });//win func.
});//ready func.




