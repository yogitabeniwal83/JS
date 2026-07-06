class ToyotaCar {
    constructor(brand) {
        console.log("creating new object");
        this.brand = brand;
    }

    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand){
        this.brandName = brand;
    }
}



let fortuner = new ToyotaCar("fortuner");  
// fortuner.setBrand("fortuner"); 