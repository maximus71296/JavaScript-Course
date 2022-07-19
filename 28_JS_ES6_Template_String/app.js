// 1) Template String (`) Back Tick Operator +
let mobile = {
    brand : 'Apple',
    color : 'Silver',
    price : 78000
};

let msg = "BRAND : " + mobile.brand + " COLOR : " + mobile.color + " PRICE : " + mobile.price;
console.log(msg);

let msg1 = `BRAND : ${mobile.brand} COLOR : ${mobile.color} PRICE : ${mobile.price}`;
console.log(msg1);

let template1 = "<ul>" + 
                "<li>"+ mobile.brand +"</li>" + 
                "<li>"+ mobile.color +"</li>" + 
                "<li>"+ mobile.price +"</li>" + 
                "</ul>"

console.log(template1);

let template2 = `<ul>
                    <li>${mobile.brand}</li>
                    <li>${mobile.color}</li>
                    <li>${mobile.price}</li>
                </ul>`;

console.log(template2);

