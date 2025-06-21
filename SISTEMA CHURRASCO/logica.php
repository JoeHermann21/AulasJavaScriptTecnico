<?php 
		$homem = $_POST['homem'];
		$mulher = $_POST['mulher'];
		$crianca = $_POST['crianca'];
		
	function totalHomem($homem){
		$carneBovina = 500*$homem;
		$frango = 200*$homem;
		$linguica = 200*$homem;
		$refri = 300*$homem;
		$cerveja = 800*$homem;		
				
		return "<p>Carne bovina: ".$carneBovina." g <br> Frango: ".$frango." g <br> Linguiça: ".$linguica." g <br> Refri: ".$refri." ml <br> Cerveja: ".$cerveja." ml";
	}	
	
	function totalMulher($mulher){
		$carneBovina = 300*$mulher;
		$frango = 200*$mulher;
		$linguica = 200*$mulher;
		$refri = 400*$mulher;
		$cerveja = 500*$mulher;
	
		return "<p>Carne bovina: ".$carneBovina." g <br> Frango: ".$frango." g <br> Linguiça: ".$linguica." g <br> Refri: ".$refri." ml <br> Cerveja: ".$cerveja." ml";
	}

	function totalCrianca($crianca){
		$carneBovina = 200*$crianca;
		$frango = 100*$crianca;
		$linguica = 200*$crianca;
		$refri = 200*$crianca;
	
		return "<p>Carne bovina: ".$carneBovina." g <br> Frango: ".$frango." g <br> Linguiça: ".$linguica." g <br> Refri: ".$refri." ml";
	}

	echo "<style>
			body
			{
				background-color:#ac6730;
				text-align: center;
				font-family: Verdana;
				
			}
			h1,h2,h3
			{				
				color: white;				
			}
		 </style> ";
	echo "<h1>Quantidades necessárias:</h1>";
	echo "<h2>Total de homens: ".$homem."</h2><h3>".totalHomem($homem)."</h3>";
	echo "<h2>Total de mulheres: ".$mulher."</h2><h3>".totalMulher($mulher)."</h3>";
	echo "<h2>Total de crianças: ".$crianca."</h2><h3>".totalCrianca($crianca)."</h3>";
	

 ?>
