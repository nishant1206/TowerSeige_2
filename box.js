class Box {
    constructor(x, y) {
        var options = {
            'restitution': 0.8,
            'friction': 0.3,
            'density': 1.0
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        this.v = 255;
        this.image = loadImage("wood1.png");
        // this.image.scale = 0.5;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        if (this.body.speed < 3) {

            push();
            translate(pos.x, pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            // image(this.image, 50, 50)
            pop();
        } else {
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            imageMode(CENTER);
            this.v = this.v - 5;
            tint(255, this.v);
            image(this.image, 0, 0, this.width, this.height);
            // image(this.image, 50, 50)
            pop();
        }
    }
    score() {
        if (this.v < 0 && this.v > -55) {
            score = score + 5;
        }
    }
};