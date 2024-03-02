class Vehicle {
    constructor(manufacturer, model, vehicle, vin, type, fuel, color) {
        this.color = color;
        this.fuel = fuel;
        this.manufacturer = manufacturer;
        this.model = model;
        this.type = type;
        this.vehicle = vehicle;
        this.vin = vin;
    }
}

module.exports = Vehicle;