class Mobile {
    constructor(brand, price, color){
        this.brand = brand;
        this.price = price;
        this.color = color;
    }

    getBrand(){
        return this.brand;
    }

    setBrand(brand){
        this.brand = brand;
    }  

    getPrice(){
        return this.price;
    }

    setPrice(price){
        this.price = price;
    }

    getColor(){
        return this.color;
    }

    setColor(color){
        this.color = color;
    }

    printSpecs(){
        let specs = `BRAND: ${this.getBrand()} || PRICE: ${this.getPrice()} || COLOR: ${this.getColor()}`;
        console.log(specs);
    }
}

let mobile = new Mobile('Apple', 78000, 'Silver');
mobile.printSpecs();
mobile.setPrice(91000);
mobile.printSpecs(); 