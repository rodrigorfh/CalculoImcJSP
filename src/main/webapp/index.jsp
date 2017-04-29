<!DOCTYPE html>
<!-- mvn org.apache.tomcat.maven:tomcat7-maven-plugin:2.2:run -Dmaven.tomcat.port=9090 -->
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<title>Calculo de IMC</title>
	<script src="js/calculoMostrarImc.js"></script>
	<link rel="stylesheet" type="text/css" href="css/estiloCalculoimc.css">
</head>
<body>
	<div class ="row-fluid">
		<!--Informa alerta da msg com base no seu imc-->
		<div class="col-md-4 col-md-offset-4" id="alertaIMC"></div>
			
		<div class="col-md-4 col-md-offset-4" id="painel-meio">
		    <div class="panel panel-default">
		    	<div class="panel-heading"> 
		    		<h1>Calculo IMC</h1>                               
		        </div>
		        <div class="panel-body">
		     		<div class="col-xs-2">
			        	<h3><small>Peso</small></h3>
			        	<h3><small>Altura</small></h3>	        	 
			        </div>
			        <form>
				        <div class="col-xs-8"> 
				        	<input class="form-control" type="text" name="peso" value="10"  placeholder="Peso" id= "peso" autofocus="">
				        	<input class="form-control" type="text" name="altura" value="11" placeholder="Altura" id = "altura">

				        	<div id="div-radio">
				        		<label class="radio-inline">
	  								<input type="radio" name="genderOption" value="M"> M
								</label>
								<label class="radio-inline">
								  <input type="radio" name="genderOption"  value="F"> F
								</label>
				        	</div>
				   			
				        	<div class= "col-xs-6">
				        		<button type="submit" class="btn btn-primary" name="btn-calc" value="calc">Calcular</button>
				        	</div>

				        	<div class= "col-xs-6">
				        		<button type="submit" class="btn btn-danger" name="btn-clean" value="clean">Limpar</button>
				        	</div>
				        </div>
			        </form>
			       	<div class="col-xs-2">
			       	<%	
			       		// Float peso =Float.parseFloat(request.getParameter("peso").replaceAll(",", "."));
			       		// Float altura = Float.parseFloat(request.getParameter("altura").replaceAll(",", "."));
			       		 
			       		
			       		String imc="";
			       		String resultado="";
			       		resultado = (imc != "")? imc : "Deu\nRuim";
						
					%>

			      	  <h1 id="resultado" value="<%= imc %>">
			      	  <%= resultado %>			     		
			      	  </h1>
			       	</div>

		        </div>
		    </div>
		</div>
	</div>
</body>
</html>


