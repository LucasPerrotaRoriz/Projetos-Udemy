'use strict';

/* 
Default values can contain any expression ex: price = 199 * 1.2.
You can't skip values ex: createBooking('LH123', 1000); skips passenger and sets price.
You don't want do define a value and let it as the default simply pass undefined
ex: createBooking('LH123', undefined, 1000);
*/

const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
    // Old way setting default parameters ES5
    /*numPassengers = numPassengers || 1;
    price = price || 199;*/

    const booking = {
        flightNum,
        numPassengers,
        price
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);


