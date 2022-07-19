// Print 0 to 10
let result = '';
let i = 0;
do{
    if(i<=9){
        result += `${i}, `;
    }
    else{
        result += `${i}`;
    }
    i++;
}
while(i<=10)
console.log(result);

// Print 20 to 0
result = '';
i = 20;
do{
    if(i>0){
        result += `${i}, `;
    }
    else{
        result += `${i}`;
    }
    i--;
}
while(i>=0)
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
do{
    let j = 1;
    do{
        result += `* `;
        j++;
    }
    while(j<=i)
    result += `\n`;
    i++;
}
while(i<=number)
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
i = 1;
do{
    j = 1;
    do{
        result += `${j} `;
        j++;
    }
    while(j<=i)
    result += `\n`;
    i++;
}
while(i<=number)
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
    i = 1;
    do{
        j = 1;
        do{
            result += `${i} `;
            j++;
        }
        while(j<=i)
        result += `\n`;
        i++;
    }
    while(i<=number)
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
do{
    j = 1;
    do{
        result += `${j} `;
        j++
    }
    while(j <= i)
    result += `\n`;
    i--;
}
while(i >= 1)
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
    do{
        j = 1;
        do{
            result += `${i} `;
            j++
        }
        while(j <= i)
        result += `\n`;
        i--;
    }
    while(i >= 1)
    console.log(result);
    