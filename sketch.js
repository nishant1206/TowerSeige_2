const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var bird, bird_2, pig, logs, str;
var box_state = "fly";
var score = 0;
var backgroundImg;

function preload() {
    change_bg();
}

function setup() {
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, height - 30, 1200, 20);
    box1 = new Box(625, 540);
    box2 = new Box(675, 540);
    box3 = new Box(725, 540);
    box4 = new Box(775, 540);
    box5 = new Box(825, 540);
    box6 = new Box(875, 540);

    box7 = new Box(650, 505);
    box8 = new Box(700, 505);
    box9 = new Box(750, 505);
    box10 = new Box(800, 505);
    box11 = new Box(850, 505);

    box12 = new Box(675, 470);
    box13 = new Box(725, 470);
    box14 = new Box(775, 470);
    box15 = new Box(825, 470);

    box16 = new Box(700, 435);
    box17 = new Box(750, 435);
    box18 = new Box(800, 435);

    // box19 = new Box(400, 435, 35, 35);

    // bird = new Bird(80, 80);
    bird_2 = new Bird(200, 200);

    str = new Rope(bird_2.body, { x: 200, y: 200 });



}

function draw() {
    if (backgroundImg) {
        background(backgroundImg);
    } else {
        background(255);
    }
    Engine.update(engine);

    fill("black");
    text(mouseX, 200, 30);
    text(mouseY, 250, 30);

    // bird.display();
    bird_2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();

    box12.display();
    box13.display();
    box14.display();
    box15.display();

    box16.display();
    box17.display();
    box18.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();

    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();

    box12.score();
    box13.score();
    box14.score();
    box15.score();

    box16.score();
    box17.score();
    box18.score();

    // box19.display();
    str.display();

    ground.display();


    fill("red");
    textSize(20);
    text("The score is :- " + score, 400, 100, )
        // Bodies.applyForce();
}

function mouseDragged() {
    Matter.Body.setPosition(bird_2.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    str.fly();
}

function keyPressed() {
    if (keyCode == 32) {
        Matter.Body.setPosition(bird_2.body, { x: 200, y: 200 });
        str.attach(bird_2.body);
    }
}

async function change_bg() {
    var loadtime = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var timejson = await loadtime.json();
    var t = timejson.datetime;
    var hr = t.slice(11, 13);
    if (hr > 6 && hr < 17) {
        bg = "bg.png";
    } else {
        bg = "bg2.jpg";
    }
    backgroundImg = loadImage(bg);
}