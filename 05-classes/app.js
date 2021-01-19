//addClass
$('.abrir-modal').on('click', () =>
  $('.modal').addClass('active'));

//removeClass só usar o mesmo padrão... 
//Posso usar o toggle também caso queira ficar alternando entre add e remover uma class

// hasClass
// Posso verificar se existe a classe ou não, por exemplo:
// Forma 1 (event)
$('.abrir-modal').on('click', (event) => {
  const verification = $(event.target).hasClass('active') ? 'Existe' : 'Não existe';
  console.log(verification);
});

// Forma 2 (this)
$('.abrir-modal').on('click', function () {
  if ($(this).hasClass('active'))
    console.log('alou');
  else
    console.log('nao alou');
});

//Ao clicar em abrir o modal, trocar a mensagem para fechar o modal... Que quando clicado, fechar o modal.
$('.abrir-modal').on('click', handleModal);

function handleModal() {
  $('.modal').toggleClass('active');

  if ($('.modal').hasClass('active'))
    return $(this).text('Fechar modal');
  return $(this).text('Abrir modal');
}