var signos = [["Capricornio", "Tauro", "Virgo"],
              ["Cancer", "Escorpio", "Piscis"],
              ["Libra", "Acuario", "Géminis"],
              ["Aries", "Leo", "Sagitario"]];

for (i = 0; i < signos.length; i++) {
  var elementos;
  switch (i) {
    case 0:
          elementos ="Tierra";
          break;
    case 1:
          elementos="Agua";
          break;
    case 2:
          elementos="Aire";
          break;
    case 3:
          elementos="Fuego";
          break;
  }

  if(elementos === "Tierra"){
    console.log("*****",elementos,"*****");
  }else{
    console.log("******",elementos,"******");
  }

  for (j = 0; j < signos[i].length; j++) {
    console.log(signos[i][j]);
  }
}
