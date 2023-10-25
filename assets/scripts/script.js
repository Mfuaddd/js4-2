//TASK 1

function find45(...params) {
    for (let i = 0; i < params.length; i++) {
        if(params[i] === 45) return i

    }
}

console.log("find45:",find45(12,32,44,56,5,6,45));

//TASK 2

function findNum(num,arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === num){
            count++
        }
    }
    return count
}

const arr =  [3,2,1,4,3,1,5,6,9,3,2,52,3,2]
let num = 3
console.log("findNum:",findNum(num,arr));

//TASK 3

function findSum(...arr) {
    let min=arr[0]
    let max=arr[0]
    let sum=0
    for (let i = 0; i < arr.length; i++) {
        if(max < arr[i]) max = arr[i]
        if(min > arr[i]) min = arr[i]
        sum+=arr[i]
    }
    return sum-(max+min)
}

console.log("findSum:",findSum(2,1,3,4,6));

//TASK 4

function newNum(num) {
    let c = 1
    while(true){
        if(num/10**c <1)break;
        c++;
    }
    let lastDigit = num%10;
    let newnum = (num-lastDigit)/10 + lastDigit*10**(c-1)
    return newnum
}

console.log("newNum:",newNum(47593));
