// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

function avg(array) {
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        total += array[i];
    }
    console.log(total / array.length);
}

function avg(array) {
    let total = 0;
    for(let i of array) {
        total += i;
    }
    console.log(total / array.length);
}


array = [75,76,90,95,100];
avg(array);