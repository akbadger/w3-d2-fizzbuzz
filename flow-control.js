// <------if------>

// var todayIs = 'Tuesday';


// if ('three' == 3) {
//     console.log('Basically the same.');
// }
// else {
//     console.log('so different.');
// }

// if (todayIs ==='Tuesday') {
//     console.log ('Happy Valentines Day!');
// }
// else {
//     console.log(`Happy ${todayIs} !`);
// }
// else if (todayIs === 'Wednesday') {
//     console.log(`Happy Humpday!`);

// }


// var todayIsTuesday = true;
// // console.log(typeof todayIsTuesday);

// var counter = 0;
// counter = counter + 2;
// // counter += 2;
// // console.log(counter);

// if (counter >= 2) {
//     console.log('correct answer.');
// }

// var slicesOfPizza = 12;

// if (slicesOfPizza % 3 === 0 || slicesOfPizza % 5 === 0) {
//     console.log('there\'s enough for all of you.');
// }
// else {
//     console.log('not going to divide evenly.');
// }

// <------switch------>

// var temperature = 90;

// switch (temperature) {
//     case 50: 
//         console.log('Getting warmer.');
//         break;
//     case 60:
//         console.log('Getting closer to Spring.');
//         break;
//     case 70:
//         console.log('Spring is here.');
//         break;
//     default:
//         console.log('Who knows. Welcome to Indiana.');
// }

// <------ternary operators------>

// var favoriteColor = 'red';
// var message = favoriteColor === 'red' ? 'My favorite color is red.' : 'My favorite color is not red.';

// console.log(message);

// <------loops------>

// var pets = ['dog', 'cat', 'hamster', 'fish'];

// for (var i = 0; i < 20; i++) {
//     document.getElementById('robots').innerHTML += `<img src="http://robohash.org/indy${i}" />`;
// }

// function addOne(number) {
//     return number += 1;
// }

// var result = addOne(100);

// console.log(result);

function capitalize(word) {
    return word.toUpperCase();
}

var result = capitalize('Almost lunch time.');

console.log(result);        