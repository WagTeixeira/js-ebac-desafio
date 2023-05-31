const sequenciaArray = [7,21,75,90,180,2];

const valorMaior = sequenciaArray.reduce(function(valorAnterior, valorAtual) { 
	return valorAnterior > valorAtual ? valorAnterior : valorAtual; 
});

console.log("O valor maior é: " + valorMaior);

const valorMenor = sequenciaArray.reduce(function(valorAnterior, valorAtual) { 
	return valorAnterior < valorAtual ? valorAnterior : valorAtual; 
});

console.log("O valor menor é: " + valorMenor)