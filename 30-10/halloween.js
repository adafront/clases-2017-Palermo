/*- preguntoPosicion(x,y)
- busco el valor de la posicion 
- determino tipo de barco (1,2,3,4)
- determino hundido o tocado
- contador de hundidos
- contador de tocados

x e y

barcos[x][y]

if(barcos[x][y] == 0 OR barcos[x][y] == "x"){

	if(barcos[x][y] == 0){
		barcos[x][y] = "x";
		return "Agua";
	}
	return "Ya me lo dijiste";	

}else{ // hay un barco

	switch(barcos[x][y]){

		case 1: contHundidos++; 
				barcos[x][y] = -1; 
		break;

		case 2: contT2++;
				barcos[x][y] = -2;
				if(contT2 == 2){
					contHundidos++;
					return "hundiste destructor";
				} 	
				break;
	
		case 3: contT3++;
				if(contT3 == 3){
					contHundidos++;
					return "hundiste crucero";
				}
				barcos[x][y] = -3;	
				break;
		
		case 4: contT4++; 
				barcos[x][y] = -4;	
				break;
			
	}
	

}
 
*/