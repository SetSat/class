class CustomCircle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    getCurrentRadius() {
        console.log(
            `The circle's current radius is: ${this.radius}`
        );
    }

    setNewRadius(r) {
        if (typeof r === "number") {
            console.log(`The circle's radius has been updated to: ${(this.radius = r)}`);
        } else {
            console.log(
                `Error: Radius should be a number. You entered "${r}". Please enter a number without double quotes, e.g., 3.5.`
            );
        }
    }

    getCurrentColor() {
        console.log(
            `The circle's current color is: ${this.color}`
        );
    }

    setNewColor(clr) {
        if (typeof clr === "string") {
            console.log(`The circle's color has been updated to: ${(this.color = clr)}`);
        } else {
            console.log(
                `Error: Color should be a string. You entered "${clr}". Please enter a color within double quotes, e.g., "Green".`
            );
        }
    }

    describeCircle() {
        console.log(`Circle Description: [Radius = ${this.radius} , Color = ${this.color}]`);
    }

    getArea() {
        let r = this.radius;
        return `The area of the circle is: ${Number(Math.PI * r * r)}`;
    }

    getCircumference() {
        let r = this.radius;
        return `The circumference of the circle is: ${Number(2 * Math.PI * r)}`;
    }
}

const circle1 = new CustomCircle(3.2, "white");
console.log(circle1);

circle1.getCurrentRadius();

circle1.setNewRadius(7.2);
circle1.getCurrentRadius();

circle1.getCurrentColor();

circle1.setNewColor("black");
circle1.getCurrentColor();

circle1.describeCircle();

let area = circle1.getArea();
console.log(area);

let circumference = circle1.getCircumference();
console.log(circumference);
