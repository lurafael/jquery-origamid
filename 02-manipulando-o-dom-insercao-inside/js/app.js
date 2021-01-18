//append
//Passa por todos os H3 do site adicionando o conteúdo do .append()
$('h3').append('Isso é um H3');

//Passa por todos os p do site adicionando ao fim dele o conteúdo do h1 que ele capturou
$('p').append($('.introducao h1')); //Ele remove esse h1 e sai clonando

//appendTo
//O contrário do append, passa por todos os h1 do site adicionando o conteúdo de p 
$('p').appendTo($('.introducao h1'));

//prepend e prependTo são basicamente o contrário do append e appendTo,
//adicionam antes do elemento selecionado.

//.html() 
//Pega o conteúdo do primeiro item selecionado e transforma em uma string (Get)
const $firstH2Content = $('h2').html();
console.log($firstH2Content); //Produtos

//Substitui o elemento selecionado pelo conteúdo passado por parâmetro no site inteiro (Set)
const $htmlChangeValue = $('p').html('teste'); //Se eu passar uma tag no parâmetro, renderiza a tag tbm

//.text() 
//Pega o conteúdo de todos os itens selecionados e transforma em string (Get)
const $allH2Contents = $('h2').text(); 
console.log($allH2Contents);

//Substitui o elemento selecionado pelo conteúdo passado por parâmetro no site inteiro (Set)
const $textChangeValue = $('h2').text('teste'); //Se eu passar uma tag no parâmetro, não renderiza