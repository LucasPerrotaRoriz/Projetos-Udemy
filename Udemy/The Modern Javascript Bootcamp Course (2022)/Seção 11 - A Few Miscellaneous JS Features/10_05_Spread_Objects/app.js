const feline = {
  legs: 4,
  family: 'Felidae'
};

const canine = {
  family: 'Caninae',
  furry: true,
  legs: 4
};

const dog = {
  ...canine,
  isPet: true,
  adorable: true
}

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: 'unpredictable'
}

const catDog = {
  ...canine,
  ...feline
}

const test = {...[4,5,6]};

const random = [...'hello', {
  ...catDog
}]
console.log(random);