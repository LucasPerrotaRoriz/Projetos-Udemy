'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  // Destructuring object
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

// return 10 since numGuests is 0 and 0 is a falsy value
// if you don't want that use the ?? operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

/* Nullish Coalescing Operator
This operator works with the idea or with the concept of nullish values
instead of falsy values.
Nullish values are null and undefined it does not include 0 or ''
For the nullish operator is as if 0 and '' are not falsy values and are instead
truthy values. Only nullish values will short circuit the evaluation
*/
// If the first value was null or undefined then the second value would execute and return
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

