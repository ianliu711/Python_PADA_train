// q: how to run index.js
// a: node index.js


// Generate a function to add two numbers
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

// Call the function
console.log(addTwoNumbers(2, 3)); // 5
console.log(addTwoNumbers(4, 6)); // 10


// function sumArr(arr) {
//     let sum = 0;
//     for (let i in arr) {
//         sum += i;
//     }
//     return sum;
// }


// 變數用num，執行OK
// function sumArr(num) {
//     var sum = 0;
//     //console.log(num);
//     for (var i=0; i<num; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumArr(6));


// q: 以下程式碼有什麼問題？
// a: 1. sumArr() 要傳入一個 array
//    2. for (var i of arr) 是對的
//    3. console.log(sumArr([1, 2, 3]))

function sumArr(arr) {
    let sum = 0;
    for (let i=0; i<arr; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumArr(11));



