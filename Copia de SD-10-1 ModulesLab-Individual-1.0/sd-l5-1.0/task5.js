export function rubricPassFail(puntuacion) {
    if (puntuacion >= 5) {
      return "Pasa";
    } else {
      return "Falla";
    }
  }
  
  const resultado = rubricPassFail(6);
  console.log(resultado);
  
  const resultado2 = rubricPassFail(3);
  console.log(resultado2);