// //after 
// //Adiciona após o elemento selecionado, fora dele, após ele
$('p').after('<span> * </span>');

// //insertAfter 
// //Mesma coisa que o after, mas a chamada é ao contrário
$('<span> * </span>').insertAfter('p');

// //before
// //Adiciona antes do elemento selecionado, fora dele, atrás dele
$('p').before('<span> - </span>');

// //insertBefore
// //Mesma coisa que o before, mas a chamada é ao contrário
$('<span> - </span>').insertBefore('p');

//wrap
//Envolve o elemento selecionado no elemento passado por argumento (Obrigatório que seja um elemento html)
$('p').wrap('<span> * </span>');

//unwrap
//Remove o elemento pai do elemento selecionado
$('p').unwrap();