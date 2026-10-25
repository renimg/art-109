let canvas;
let x = 0;
let y = 0;
let easing = 0.05;
let objscale;
let ofx;
let ofy;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", -20);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    clear();
    easingmouse();
    push();
    translate (x, y);
    push();
    scale(0.5);
    translate(-windowWidth/6,-windowHeight/4)
    push();
    pop();
    kityface(0, 0, 256);
    pop();
    pop();
}

function mouseMoved() {
    // drawThing();
}

function drawThing() {
    strokeWeight(0);
    fill(random(200, 255), random(200, 255), random(200, 255));
    ellipse(mouseX, mouseY, 30, 30);
}

function easingmouse() {
    x = x + ((mouseX - x) * easing)
    y = y + ((mouseY - y) * easing)
}

function kityface(ofx, ofy, objscale) {

    stroke(0);
    strokeWeight(objscale / 24);
    fill(0, 0, 0);
    triangle(objscale / 2 + ofx, objscale + ofy, objscale / 2 + ofx, objscale / 3 + ofy, objscale + ofx, objscale / 2 + ofy);
    triangle(objscale * 1.5 + ofx, objscale + ofy, objscale * 1.5 + ofx, objscale / 3 + ofy, objscale + ofx, objscale / 2 + ofy);
    fill(0, 0, 0);
    circle(objscale + ofx, objscale + ofy, objscale); //head
    noStroke();

    fill(90, 81, 84);
    triangle(objscale / 2 + ofx, objscale + ofy, objscale / 2 + ofx, objscale / 3 + ofy, objscale + ofx, objscale / 2 + ofy);
    triangle(objscale * 1.5 + ofx, objscale + ofy, objscale * 1.5 + ofx, objscale / 3 + ofy, objscale + ofx, objscale / 2 + ofy);
    fill(237, 163, 196);
    triangle(objscale / 1.6667 + ofx, objscale + ofy, objscale / 1.6667 + ofx, objscale / 2.3077 + ofy, objscale + ofx, objscale / 1.6667 + ofy);
    triangle(objscale * 1.4 + ofx, objscale + ofy, objscale * 1.4 + ofx, objscale / 2.3077 + ofy, objscale + ofx, objscale / 1.6667 + ofy);
    fill(90, 81, 84);
    circle(objscale + ofx, objscale + ofy, objscale); //head
    rectMode(CENTER);
    fill(237, 163, 196);
    rect(objscale * .9333 + ofx, objscale * 1.2167 + ofy, objscale * 0.1167, objscale * 0.1667, 0, 0, objscale * 0.0667, objscale * 0.0667);

    let animY = (objscale * 1.3) * sin(frameCount * 0.05) + (objscale * 1.2167) * 2;
    let y = objscale * 1.2167;
    y = lerp(y, animY, 0.05);

    if (mouseIsPressed == true) {
        if (mouseX > objscale * 0.84 + ofx && mouseX <= objscale * 1.008 + ofx) {
            if (mouseY > objscale * 1.065 + ofy && mouseY <= objscale * 1.135 + ofy) {
                fill(237, 163, 196);
                rect(objscale * .9333 + ofx, y + ofy, objscale * 0.1167, objscale * 0.2, 0, 0, objscale * 0.0667, objscale * 0.0667);
            }
        }
    }
    // mouse pressed test ends
    fill(90, 81, 84);
    ellipse(objscale * 0.8833 + ofx, objscale * 1.1167 + ofy, objscale / 3, objscale / 5); //mouth
    ellipse(objscale + ofx, objscale * 1.1167 + ofy, objscale / 3, objscale / 5); //mouth
    noFill();
    strokeWeight(objscale / 48);
    stroke(0);
    // spline(objscale * 0.9333 + ofx, objscale + ofy, objscale * 0.9333 + ofx, objscale * 1.2 + ofy, objscale * 0.7166 + ofx, objscale * 1.1667 + ofy, objscale * 0.7166 + ofx, objscale * 0.6667 + ofy);
    // spline(objscale * 0.9333 + ofx, objscale + ofy, objscale * 0.9333 + ofx, objscale * 1.2 + ofy, objscale * 1.1667 + ofx, objscale * 1.1667 + ofy, objscale * 1.1667 + ofx, objscale * 0.6667 + ofy);
    strokeWeight(0);

    fill(84, 64, 77);
    circle(objscale * 0.7667 + ofx, objscale * 0.9667 + ofy, objscale / 3.75);
    circle(objscale * 1.083 + ofx, objscale * 0.9667 + ofy, objscale / 3.75); //eyebags
    fill(255);
    beginClip();
    push();
    circle(objscale * 0.7667 + ofx, objscale * 0.9333 + ofy, objscale / 3.75);
    circle(objscale * 1.083 + ofx, objscale * 0.9333 + ofy, objscale / 3.75); //eyes
    endClip();
    fill(255);
    circle(objscale * 0.7667 + ofx, objscale * 0.9333 + ofy, objscale / 3.75);
    circle(objscale * 1.083 + ofx, objscale * 0.9333 + ofy, objscale / 3.75); //eyes
    if (mouseIsPressed == true) {
        fill(54, 89, 63);
        ellipse(objscale * 0.7667 + random(objscale / 70) + ofx, objscale * 0.9333 + ofy, objscale / 7.5, objscale / 3.75);
        ellipse(objscale * 1.083 + random(objscale / 70) + ofx, objscale * 0.9333 + ofy, objscale / 7.5, objscale / 3.75); //dark iris
        fill(66, 115, 79);
        ellipse(objscale * 0.7667 + random(objscale / 70) + ofx, objscale * 0.9333 + ofy, objscale / 10, objscale / 4.2857);
        ellipse(objscale * 1.083 + random(objscale / 70) + ofx, objscale * 0.9333 + ofy, objscale / 10, objscale / 4.2857); //dark iris
        fill(255);
        ellipse(objscale * 0.7667 + random(objscale / 70) + ofx, objscale * 0.9333 + ofy, objscale / 15, objscale / 5);
        ellipse(objscale * 1.083 + random(objscale / 70) + ofx, objscale * 0.9333 + ofy, objscale / 15, objscale / 5); //dark iris
    }
    else {
        fill(54, 89, 63);
        ellipse(objscale * 0.7667 + ofx, objscale * 0.9333 + ofy, objscale / 7.5, objscale / 3.75);
        ellipse(objscale * 1.083 + ofx, objscale * 0.9333 + ofy, objscale / 7.5, objscale / 3.75); //dark iris
        fill(66, 115, 79);
        ellipse(objscale * 0.7667 + ofx, objscale * 0.9333 + ofy, objscale / 10, objscale / 4.2857);
        ellipse(objscale * 1.083 + ofx, objscale * 0.9333 + ofy, objscale / 10, objscale / 4.2857); //dark iris
        fill(255);
        ellipse(objscale * 0.7667 + ofx, objscale * 0.9333 + ofy, objscale / 15, objscale / 5);
        ellipse(objscale * 1.083 + ofx, objscale * 0.9333 + ofy, objscale / 15, objscale / 5); //dark iris
    }
    pop();
    fill(237, 163, 196);
    ellipse(objscale * 0.9167 + ofx, objscale * 1.1 + ofy, objscale / 6, objscale / 15); //nose

    fill(255, 128, 255);

    // circle(280,360,2)
    // circle(215,335,2)

    //circle(280,340,2)
    //circle(215,315,2)

    //circle(280,360,2)
    //circle(350,335,2)

    //circle(280,340,2)
    //circle(350,315,2)
}
