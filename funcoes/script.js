// Crie uma função para verificar se um valor é Truthy
function isTruthy(valor){
  if (!!valor){
      return 1;
  } else {
      return 0;
  }
}

isTruthy(1);
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado){
  return 4 * lado;
}
perimetroQuadrado(3);
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}
// Crie uma função que verifica se um número é par
function isEven(numero){
  if (numero % 2 == 0) {
    return 1;
  }
  else{
    return 0;
  }
}
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoArg(arg){
  return typeof(arg);
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
  console.log("Yuri Herbert");
});

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);

