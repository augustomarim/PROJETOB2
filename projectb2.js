function gerarAleatorios(quantidade) 
{
    const numerosPossiveis = Array.from({ length: 60 }, (_, i) => i + 1); 
    const vetor = [];
    
    for (let i = 0; i < quantidade; i++) {
      const indice = Math.floor(Math.random() * numerosPossiveis.length); 
      vetor.push(numerosPossiveis[indice]); 
      numerosPossiveis.splice(indice, 1); 
    }
  
    console.log("Finais: ", vetor);
}
  
  function main(quantidade) 
  {
    console.time("timer");
    gerarAleatorios(quantidade);
    console.timeEnd("timer");
  }
  
  main(6);
  