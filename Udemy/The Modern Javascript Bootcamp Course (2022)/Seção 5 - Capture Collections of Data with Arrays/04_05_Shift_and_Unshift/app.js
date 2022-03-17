let dishesToDo = [ 'large platter' ];

//to add to the start:
dishesToDo.unshift('large plate');
dishesToDo.unshift('small plate');

//add to the start again:
dishesToDo.unshift('cereal bowl');
dishesToDo.unshift('spoon');

// Add more than one element order is preserved
dishesToDo.unshift('fork', 'knife');

//remove from the start:
dishesToDo.shift();

dishesToDo.push('cutting board', 'cookie sheet');
