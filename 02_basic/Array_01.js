const myArr = [ 1, 2, 3, 4, 5, 6]


// console.log(myArr)

//Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(2))
// console.log(myArr.indexOf(1))

// const newarr = myArr.join()                 //convert in string 1,2,3,4,5,6
// console.log(myArr)                          //[ 1, 2, 3, 4, 5, 6 ]
// console.log(newarr)                         //1,2,3,4,5,6

//slice and splice

console.log("A = ",myArr);                       //A =  [ 1, 2, 3, 4, 5, 6 ]
const myn1 = myArr.slice(1,3);                  //[ 2, 3 ]
console.log(myn1);

console.log("B = ", myArr);                     //B =  [ 1, 2, 3, 4, 5, 6 ]
const myn2 = myArr.splice(1,3);                 //[ 2, 3, 4 ]
console.log(myn2);                              //remove elements form range 1 to 3
console.log("c = ", myArr);                     //c =  [ 1, 5, 6 ]

