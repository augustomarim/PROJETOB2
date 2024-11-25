# PROJETOB2

Comparação de Desempenho: Geração de Números Aleatórios
Este README documenta a comparação entre dois métodos para gerar números aleatórios únicos, destacando as diferenças de desempenho e justificando a eficiência do código otimizado.

Código Original

```
function gerarAleatorios(quantidade){
  var vetor = [];
  var geracoes = [];

  while(vetor.length < quantidade){
    var aleatorio = Math.floor(Math.random()*60 + 1);
    geracoes.push(aleatorio);
    if(vetor.includes(aleatorio)){
      continue;
    }else{
      vetor.push(aleatorio);
    }
  }

  console.log("Gerações: ", geracoes);
  console.log("Finais: ", vetor);
}

function main(quantidade){
  console.time("timer");
  gerarAleatorios(quantidade);
  console.timeEnd("timer");
}

```

Desvantagens:
Número excessivo de repetições:
O código continua gerando números aleatórios, mesmo que eles já tenham sido escolhidos, o que resulta em operações desnecessárias.
Custo de busca linear (includes):
Cada vez que um número é gerado, o código verifica se ele já existe no vetor, o que tem custo 
𝑂(𝑛)
O(n). Isso se torna significativo para listas maiores.

Código Otimizado

```
function gerarAleatorios(quantidade) {
  const numerosPossiveis = Array.from({ length: 60 }, (_, i) => i + 1);
  const vetor = [];
  
  for (let i = 0; i < quantidade; i++) {
    const indice = Math.floor(Math.random() * numerosPossiveis.length);
    vetor.push(numerosPossiveis[indice]);
    numerosPossiveis.splice(indice, 1);
  }

  console.log("Finais: ", vetor);
}

function main(quantidade) {
  console.time("timer");
  gerarAleatorios(quantidade);
  console.timeEnd("timer");
}
```

Vantagens:
Elimina números repetidos de forma natural:
A lista numerosPossiveis contém inicialmente todos os números possíveis. Cada número selecionado é removido da lista, eliminando a necessidade de verificações com includes.
Reduz o número de gerações:
Os números gerados são sempre válidos, sem necessidade de descartá-los por repetição.
Clareza na lógica:
A lógica do código é mais direta e menos propensa a erros relacionados a números duplicados.
Comparação de Desempenho
Testes foram realizados gerando 6 e 50 números únicos em 10 execuções para cada abordagem.

Resultados:
Para 6 números:
O código original foi ligeiramente mais rápido devido ao custo do splice no código otimizado. No entanto, as diferenças são pequenas.

Para 50 números:
O código otimizado mostrou-se mais eficiente porque elimina números diretamente, enquanto o código original realiza verificações cada vez mais custosas conforme o vetor cresce.

Por que o código otimizado é melhor?
Escalabilidade:
O código otimizado lida melhor com situações onde muitos números únicos precisam ser gerados, especialmente em grandes intervalos.
Previsibilidade:
Reduz o impacto de números repetidos, garantindo tempos de execução mais consistentes.
Complexidade:
A abordagem original tem complexidade dependente do número de colisões e cresce exponencialmente em casos extremos. O otimizado mantém uma lógica linear para a maioria das operações.

