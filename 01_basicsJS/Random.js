function getRandom(min, max){
    return Math.floor(Math.random() * (max - min)) + min
}


const num = getRandom(0,99);
console.log(num)