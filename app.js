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

const form = document.getElementById("carForm");
const display = document.getElementById("carDisplay");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let car = new ToyCar(
        document.getElementById("model").value,
        document.getElementById("manufacturer").value,
        document.getElementById("scale").value,
        document.getElementById("color").value,
        document.getElementById("material").value,
        document.getElementById("length").value,
        document.getElementById("weight").value,
        document.getElementById("doors").value,
        document.getElementById("wheels").value,
        document.getElementById("price").value
    );

    let card = document.createElement("div");
    card.classList.add("car-card");

    card.innerHTML = `
        <h3>${car.model}</h3>
        <p>${car.describe()}</p>
    `;

    display.appendChild(card);
});

