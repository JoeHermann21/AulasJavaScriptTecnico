let homem = document.getElementById("homem");
let mulher = document.getElementById("mulher");
let crianca = document.getElementById("crianca");
let resultado = document.getElementById("resultado");

function contaTotal(){
	console.log("Calculando...");

    let h = homem.value;
    let m = mulher.value;
    let c = crianca.value;

	console.log(totalHomem(h));
	console.log(totalMulher(m));
	console.log(totalCrianca(c));
	
	resultado.innerHTML = `$totalHomem(h)<br>`;
	resultado.innerHTML += `$totalMulher(m)<br>`; 
	resultado.innerHTML += `$totalCrianca(c)`;
}

function totalHomem(homem){
	carneBovina = 500;
	frango = 200;
	linguica = 200;
	refri = 300;
	cerveja = 800;
	
	homemTotal = (homem*carneBovina) + (homem*frango) + (homem*linguica) + (homem*refri) + (homem*cerveja);
	return homemTotal;
}

function totalMulher(mulher){
	carneBovina = 300;
	frango = 200;
	linguica = 200;
	refri = 400;
	cerveja = 200;
	
	mulherTotal = (mulher*carneBovina) + (mulher*frango) + (mulher*linguica) + (mulher*refri) + (mulher*cerveja);
	return mulherTotal;
}

function totalCrianca(crianca){
	carneBovina = 200;
	frango = 100;
	linguica = 200;
	refri = 200;
	
	criancaTotal = (crianca*carneBovina) + (crianca*frango) + (crianca*linguica) + (crianca*refri);
	return criancaTotal;	
}