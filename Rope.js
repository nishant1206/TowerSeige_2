class Rope {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 5
        }
        this.pointB = pointB;
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    }

    fly() {
        this.chain.bodyA = null;
    }

    attach(body) {
        this.chain.bodyA = body;
    }

    display() {
        if (this.chain.bodyA) {
            var ba = this.chain.bodyA.position;
            var pb = this.pointB;
            push();
            // stroke("green");
            strokeWeight(5);
            line(ba.x, ba.y, pb.x, pb.y);
            pop();
        }
    }
};