function sumFromOneToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// 測試案例
console.log(sumFromOneToN(5)); // 預期輸出: 15
console.log(sumFromOneToN(10)); // 預期輸出: 55
console.log(sumFromOneToN(100)); // 預期輸出: 5050