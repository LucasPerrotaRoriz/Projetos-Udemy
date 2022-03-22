const userReviews = {};

//Adding a new property:
userReviews['queenBee49'] = 4.0;
userReviews.mrSmith78 = 3.5;
userReviews.colt = '5';
console.log(userReviews);

//Updating existing properties
userReviews['colt'] = 5;
userReviews['queenBee49'] += 2;
userReviews.mrSmith78++;
console.log(userReviews);