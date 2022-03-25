const nums1 = [1,2,3];
const nums2 = [4,5,6];

const array1 = [...nums1, ...nums2];
const array2 = ['a', 'b', ...nums2];
const array3 = [...nums1, ...nums2, 7,8,9];

console.log(array1);
console.log(array2);
console.log(array3);

const cephalopods = ['dumbo octopus', 'humboldt squid',
'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug',
'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];

const mollusca = [...cephalopods, ...gastropods];
console.log(mollusca);

const inverts = [...cnidaria, ...gastropods, ...cephalopods];
console.log(inverts);



