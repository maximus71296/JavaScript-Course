// Print 0 to 10
let result = '';
let i =0;
while(i<=10){
    if(i<=9){
        result += `${i} ,`;
    }
    else{
        result += `${i}`;
    }
    i++;
}
console.log(result);

// Print 20 to 0
result = '';
i = 20;
while(i>=0){
    if(i>0){
        result += `${i} ,`;
    }
    else{
        result += `${i}`;
    }
    i--;
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
i = 1;
while(i<=number){
    let j = 1;
    while(j<=i){
        result += `* `;  
        j++;
    }
    result += `\n`;
    i++;
}
console.log(result);

/*
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
 */

number =5;
result = '';
i = 1;
while(i <= number){
    j = 1;
    while(j <= i){
        result += `${j} `;
        j++;
    }
    result += `\n`;
    i++;
}
console.log(result);

/*
    1
    2 2
    3 3 3
    4 4 4 4
    5 5 5 5 5
 */

number =5;
result = '';
i = 1;
while(i <= number){
    j = 1;
    while(j <= i){
        result += `${i} `;
        j++;
    }
    result += `\n`;
    i++;
}
console.log(result);

/*
    5 5 5 5 5
    4 4 4 4
    3 3 3
    2 2 
    1
 */
result = '';
i = 5;
while(i >= 1){
    j = 1;
    while(j <= i){
        result += `${i } `;
        j++;
    }
    result += `\n`;
    i--;
}
console.log(result);

/* 
    1 2 3 4 5
    1 2 3 4 
    1 2 3
    1 2
    1
 */
    result = '';
    i = 5;
    while(i >= 1){
        j = 1;
        while(j <= i){
            result += `${j} `;
            j++;
        }
        result += `\n`;
        i--;
    }
    console.log(result);