let mult5 = 3;
let mult7 = 5;
let resultado = 0;

for(i = 0; i < 1000; i++){
    if(i % mult5 == 0 || i % mult7 == 0){
        resultado += i;
    }
}

console.log("A soma desses Múltiplos é: " + resultado); 