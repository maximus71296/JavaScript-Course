// Print 0 - 10
let result = '';
for(let i=0; i<=10; i++){
    if(i <= 9){
        result += `${i} ,`;
    }
    else{
        result += `${i}`;
    }
}
console.log(result);

// Print 20 - 0 with difference of 2
result = '';
for(let i=20; i>=0; i-=2){
    if(i > 0){
        result += `${i} ,`;
    }
    else{
        result += `${i}`;
    }
}
console.log(result);

/*
    *
    * *
    * * *
    * * * *
    * * * * *
 */
let number = 5;
result = '';
for(let i=1; i<=number; i++){
    for(let j=1; j<=i; j++){
        result += `* `;
    }
    result += `\n`;
}
console.log(result);

/*
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
 */
number = 5;
result = '';
for(let i=1; i<=number; i++){
    for(let j=1; j<=i; j++){
        result += `${j} `;
    }
    result += `\n`;
}
console.log(result);

/*
    1
    2 2
    3 3 3
    4 4 4 4
    5 5 5 5 5
 */
number = 5;
result = '';
for(let i=1; i<=number; i++){
    for(let j=1; j<=i; j++){
        result += `${i} `;
    }
    result += `\n`;
}
console.log(result);

/*
    1 2 3 4 5
    1 2 3 4
    1 2 3 
    1 2
    1
 */
result ='';
for(let i=5; i>=1; i--){
    for(let j=1; j<=i; j++){
        result += `${j} `;
    }
    result += `\n`
}
console.log(result);

/*
    5 5 5 5 5
    4 4 4 4
    3 3 3
    2 2 
    1
 */
    result ='';
    for(let i=5; i>=1; i--){
        for(let j=1; j<=i; j++){
            result += `${i} `;
        }
        result += `\n`
    }
    console.log(result);