// peso / (altura * 2);
function calcular(){
	var peso = parseFloat((document.getElementById("peso").value).replace(",","."));
	var altura = parseFloat((document.getElementById("altura").value).replace(",","."));
	// var genero = document.getElementByName("genderOption").value;
	var genero;
	for (var i=0;i<document.getElementsByName('genderOption').length;i++){
    	if(document.getElementsByName('genderOption')[i].checked){
    		genero = document.getElementsByName('genderOption')[i].value;
    	}
	}

	if(altura >= 100){
		altura = altura/100;
	}
	var imc = peso / (altura * 2);
	if(imc < 100){
		document.getElementById("resultado").innerHTML = imc.toFixed(2);
	}else{
		document.getElementById("resultado").innerHTML = '<img src=img/infinity.ico>';
	}
	detroyDiv();
	criaDiv(imc, genero);	
}
function limpar(){
	document.getElementById("peso").value="";
	document.getElementById("altura").value="";
	document.getElementById("resultado").innerHTML = "";
	document.getElementById("peso").focus();
	for (var i=0;i<document.getElementsByName('genderOption').length;i++){
		 document.getElementsByName('genderOption')[i].checked= false;
	}
	detroyDiv();
}
function criaDiv(imc, genero){
	if(!imc) return;
	var alerta = document.createElement('div');
	alerta.id = 'alerta';
	var textAlerta;
	
	if(imc > 100){
		alerta.className = 'alert alert-warning';
		textAlerta = document.createTextNode("Ele calcula o IMC de um ser humano! Não da sua mãe.");
	}else{
		if((imc < 19.1 && genero =="F")|| (imc <20.7 && genero =="M")){
			alerta.className = 'alert alert-danger';
			textAlerta = document.createTextNode("Você é tão magro que vai deixar de existir");
		}else if((imc >= 19.1 && imc < 25.8 && genero =="F")|| (imc >= 20.7 && imc <26.4 && genero == "M")){
			alerta.className = 'alert alert-info';
			textAlerta = document.createTextNode("Parabens! Você é normal!");
		}else if((imc >= 25.8 && imc < 27.3 && genero =="F")|| (imc >= 26.4 && imc <27.8 && genero == "M")){
			alerta.className = 'alert alert-danger';
			textAlerta = document.createTextNode("Você esta acima do peso.");
		}else if((imc >= 27.3 && imc < 32.3 && genero == "F")|| (imc >= 27.8 && imc < 31.1 && genero == "M")){
			alerta.className = 'alert alert-danger';
			textAlerta = document.createTextNode("Eee Gordão. Já experimentou uma salada?");
		}else if((imc > 32.3 && genero == "F") || (imc> 31.1 && genero== "M")){
			alerta.className = 'alert alert-danger';
			textAlerta = document.createTextNode("Meu Deus! Você vai morrer");
		}else{
			alerta.className = 'alert alert-warning';
			textAlerta = document.createTextNode("Você não escolheu o genero para saber se o seu IMC de acordo");
		}
	}

	alerta.appendChild(textAlerta);
	document.getElementById('alertaIMC').appendChild(alerta);	
		
}
function detroyDiv(){
	var element = document.getElementById("alerta");
	if(element)element.parentNode.removeChild(element);
}
/*
Condição        			IMC em Mulheres | IMC em Homens
abaixo do peso              <19,1           | < 20,7
no peso normal  			19,1 - 25,8     | 20,7 - 26,4
marginalmente acima do peso 25,8 - 27,3     | 26,4 - 27,8
acima do peso ideal         27,3 - 32,3     | 27,8 - 31,1
obeso                       > 32,3          | > 31,1
*/