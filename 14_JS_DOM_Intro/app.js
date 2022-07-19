// Document
console.log(document);

// Head
console.log(document.head);

// Title
console.log(document.title);

// Body
console.log(document.body);

// Nav
let navTag = document.querySelector('nav');
console.log(navTag);

// Anchor 
let anchorTag = document.querySelector('nav a');
console.log(anchorTag);

// Inner text of Anchor Tag
let theText = anchorTag.innerText;
console.log(theText);

// Change the Inner Text
//anchorTag.innerText = "RAJAT GAUTAM";

// H1 Tag
let h1Tag = document.querySelector('#msg');
console.log(h1Tag);
h1Tag.innerText = 'Viktor Frankestine';

// Styles 
h1Tag.style.backgroundColor = 'limegreen';
h1Tag.style.color = 'white';
h1Tag.style.textAlign = 'center';
h1Tag.style.padding = '15px';
h1Tag.style.fontSize = '45px';
h1Tag.style.boxShadow = '0 0 10px black';

