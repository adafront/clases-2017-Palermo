/*console.log(planetas.push
	(['Ofiuco','Luna']));
console.log(planetas);

//var arrayDestroyed = planetas.pop();
//console.log(planetas);
//console.log(arrayDestroyed);

var lunaDestroyed = planetas[9].pop();
console.log('Saco luna:',lunaDestroyed);
console.log(planetas[9].pop());
console.log(planetas);

*/
var planetas = ["Mercurio",
				"Venus",
				"Tierra",
				"Marte",
				"Jupiter",
				"Saturno",
				"Urano",
				"Neptuno",
				"Plutón"];
//console.log(planetas);
//[]
/*for(var i=0; i< planetas.length;i++){
	console.log(planetas[i]);
}*/
//callback

/*planetas.forEach((planeta,indice) => {
	console.log(planeta,indice);
});

/*var myFuncion = function(){
	console.log("Esto es un for Each");
};

planetas.forEach(myFuncion);

/*var nombre = "Gia";
console.log("Gia");//VALOR LITERAL
console.log(nombre);
*/
//var funcion = function(planeta){
	//console.log(planeta);
//};
/*planetas.forEach(function(e,i,array){
	console.log("El planeta es " + e +
		"y esta ubicado en " + i +" " + array);
});
*/
/*planetas.forEach((e,i,array) => {
	console.log("El planeta es " + e +
		"y esta ubicado en " + i +" " + array);
});

//METODO MAP*/

var numeros = [1,2,3,4,5,6,7];

var numerosMultiplicados = 
			numeros.map(function(numero){
				return numero * 2;	
				});

console.log("Array original:" + numeros);
console.log("Array x 2: " + numerosMultiplicados);

  

                                             




