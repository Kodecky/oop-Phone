function Phone(brand, model, color, price) {
    this.brand = brand,
    this.model = model,
    this.color = color,
    this.price = price
}

Phone.prototype.printInfo = function() {
    console.log('This is ' + this.model + ' from ' + this.brand + ' in ' + this.color + ' color, and price is ' + this.price + ' pln.')
}

var galaxyS8 = new Phone('Samsung', 'galaxyS8', 'black', '2450'),
    xperiaXZPrem = new Phone('Sony', 'xperiaXZPremium', 'chrome', '2800'),
    iPhone6s = new Phone('Apple', 'iPhone6s', 'silver', '2200'),
    onePlusOne = new Phone('OnePlus', 'OnePlusOne', 'white', '1300');

/*
enter in console:
example:
iPhone6s.printInfo();
*/