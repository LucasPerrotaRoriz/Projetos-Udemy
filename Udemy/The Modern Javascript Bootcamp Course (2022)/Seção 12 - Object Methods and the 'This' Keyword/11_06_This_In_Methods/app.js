const person = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickname: 'Cher',
  fullName() {
    console.log(this);
    console.log(`${this.first} ${this.last} AKA ${this.nickname}`);
  }
}

const person2 = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickname: 'Cher',
  fullName() {
    const {
      first,
      last,
      nickName
    } = this;
    console.log(this);
    return `${first} ${last} AKA ${nickName}`;
  },
  printBio() {
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`);
  }
}

const person3 = {
  first: 'Robert',
  last: 'Herjavec',
  fullName() {
    return `${this.first} ${this.last}`
  }
}
console.log(person3.fullName());
person3.last = "Plant";
console.log(person3.last);
console.log(person3.fullName());
