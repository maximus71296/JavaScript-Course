// Block Scope
let a = 10;
{
    let a = 20;
    {
        let a = 30;
        {
            let a = 40;
            {
                let a = 50;
            }
        }
    }
}
console.log(a);

// Block Scope
let course = 'Engineering';
if(course === 'Engineering'){
    let dept = 'Software';
}
console.log(course);

// Function
let greet = () => {
    let msg = 'Hail Maximus';
    console.log(msg);
};
greet();
