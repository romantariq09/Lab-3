// Toy Car Constructor
function ToyCar(model, manufacturer, scale, color, material, length, weight, doors, wheels, price) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.scale = scale;
    this.color = color;
    this.material = material;
    this.length = length;
    this.weight = weight;
    this.doors = doors;
    this.wheels = wheels;
    this.price = price;

    this.describe = function() {
        return `
            Model: ${this.model}<br>
            Manufacturer: ${this.manufacturer}<br>
            Scale: ${this.scale}<br>
            Color: ${this.color}<br>
            Material: ${this.material}<br>
            Length: ${this.length} cm<br>
            Weight: ${this.weight} g<br>
            Opening Doors: ${this.doors}<br>
            Working Wheels: ${this.wheels}<br>
            Price: $${this.price}
        `;
    };
}


