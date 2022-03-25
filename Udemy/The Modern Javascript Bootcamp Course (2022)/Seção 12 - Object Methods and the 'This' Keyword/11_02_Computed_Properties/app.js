const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director'
const person2 = 'James Cameron'


const team = {};
team[role] = person;
team[role2] = person2;
console.log(team);

const user = 'Jools';

const userRoles = {
  [user]: 'Admin'
}

const team2 = {
  [role]: person,
  [role2]: person2,
  [1+6+9]: 'sixteen'
}

console.log(team2);

function addProp(obj, k, v) { // not using computed properties
  const copy = {
    ...obj
  };
  copy[k] = v;
  return copy;
}

const addProp2 = (obj, k, v) => { // using computer properties
  return {
    ...obj,
    [k]: v
  }
}

const addProp3 = (obj, k, v) => ({ ...obj,[k]: v})

console.log(addProp(team, 'happy', ':)'))
console.log(addProp2(team, 'happy', ':)'))
console.log(addProp3(team, 'happy', ':)'))



