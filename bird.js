class Bird {
    constructor(x, y) {
        var options = {
            restitution: 0.5,
            friction: 1.0,
            density: 1.0
        };
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        World.add(world, this.body);
    }
    display() {
        var p = this.body.position;
        push();
        rectMode(CENTER);
        translate(p.x, p.y);
        rotate(this.body.angle);
        fill("green");
        rect(0, 0, 50, 50);
        pop();
    }
};