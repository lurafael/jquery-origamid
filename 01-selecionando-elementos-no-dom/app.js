//Objeto jQuery
// $ = jQuery;

//Selecionar elemento do DOM
$('.nomeDaClasse');

//Esconder algum elemento
$('.button').hide();

//Seleção igual ao CSS
$('ul li a') //Seleciona a tag a

//Selecionar vários elementos
$('a, .teste').hide(); //Esconde todas as classes selecionadas

//Selecionar por atributo
$('a[href^="#"]').addClass('adicionado-por-atributo'); //Pega todos os href que comecem com #

//usar $nomeDaVariavel nesse padrão para saber que é um elemento JQuery
$button = $('.button');
console.log($button);

//Verificação com JQuery direto
if($('.button').length)
  console.log('Existe!');
else
  console.log('Não Existe');


