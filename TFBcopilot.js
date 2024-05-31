
/**
 * Sorts an array using the quick sort algorithm.
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const array = [5, 2, 9, 1, 7, 6, 3];
const sortedArray = quickSort(array);
console.log(sortedArray);


/**
 * Sorts an array using the bubble sort algorithm.
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        console.log(arr); // Log the array after each pass
    }
    return arr;
}

// Example usage:
const arrayTwo = [5, 2, 9, 1, 7, 6, 3];
const sortedArrayTwo = bubbleSort(arrayTwo);
console.log(sortedArrayTwo);


// 寫一個1加到n的程式，並加上測試案例
function sumToOne(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumToOne(6)); // 21
console.log(sumToOne(10)); // 55
console.log(sumToOne(15)); // 120
console.log(sumToOne(20)); // 210

