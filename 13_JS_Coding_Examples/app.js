// Find the no. of 'O' in the given string
let msg = 'Good Morning! Master Maximus';
let findZero = (msg) => {
    let count = 0;
    for(let i=0; i<= msg.length-1; i++){
        let char = msg.charAt(i);
        if(char === 'o' || char === 'O'){
            count++;
        }
    }
    return count;
};

console.log(`The 'O' in the String is: ${findZero(msg)}`);

// Reverse String
msg = 'Maximus';
let reverseString = (msg) => {
    let tempString = '';
    for(let i=msg.length-1; i>=0; i--){
        let char = msg.charAt(i);
        tempString += char;
    }
    return tempString;
};
console.log(`${msg} => ${reverseString(msg)}`);

// Check if the given string is Palindrome or not
msg = 'malayalam';
let isPalindrome = (msg) => {
    return (msg === reverseString(msg))
};
console.log(`${msg} is Palindrome? ${isPalindrome(msg)}`);

// Triangle String One
msg = 'RAJAT GAUTAM';
let traingleOne = (str) => {
    let tempStr = '';
    for(let i=1; i<=str.length; i++){
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
};
console.log(traingleOne(msg));

// Triangle String Two
let addSpace = (number) => {
    let tempSpace = '';
    for(let i=1; i<=number; i++){
        tempSpace += ' ';
    }
    return tempSpace;
};
msg = 'RAJAT GAUTAM';
let traingleTwo = (str) => {
     let tempStr = '';
     for(let i=0; i<=str.length -1 ; i++){
        tempStr += `${addSpace(i)}${str.substr(i)}\n`;
     }
     return tempStr;
};
console.log(traingleTwo(msg));

// Traingle String Three
msg = 'MARCUS MAXIMUS';
let traingleThree = (str) => {
    let tempStr = '';
    for(let i=str.length; i>=1; i--){
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr; 
};
console.log(traingleThree(msg));

// Triangle String Four
msg = 'MARCUS MAXIMUS';
let traingleFour = (str) => {
    let tempStr = '';
    for(let i=str.length -1; i >= 0; i--){
        tempStr += `${addSpace(i)}${str.substr(i)} \n`
    }
    return tempStr; 
};
console.log(traingleFour(msg));