//Evento de click
//Forma 1
$('.abrir-modal').click(() => $('.abrir-modal').text('Clicou'));

//Forma 2
$('.abrir-modal').on('click', () => $('.abrir-modal').text('Clicou'));

//Seleção de elementos únicos
//this
//Para selecionar um único elemento sem arrow functions usa-se o this 
// (Como se fosse o event.target nesse caso)
$('a').on('click', function() {
  $(this).text('Clicou');
});

//event
//Para selecionar um único elemento usando arrow functions, usa-se o event.target
$('a').click((event) => $(event.currentTarget).text('Clicou'));

//Posso criar dois eventos (mouseenter e mouseleave) para trocar o texto quando passo o mouse em cima
//e tirar o efeito quando tiro o mouse, basicamente fazendo um hover... 
$('a').mouseenter((event) => $(event.currentTarget).text('Colocou o mouse'));
$('a').mouseleave((event) => $(event.currentTarget).text('Abrir modal'));