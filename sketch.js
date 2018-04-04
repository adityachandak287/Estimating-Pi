
var pie;
var counter,total;
var r;
// var p;
var can;
function setup()
{

    r = min(windowWidth,windowHeight);
    createCanvas(r,r);
    can = createCanvas(r,r);
    //r = r*0.99;
    background(0);
    counter= 0;
    total = 0;
    pie = 0;
    translate(width/2,height/2);
    //p = createP();


}

function throwDart() {
    //translate(width / 2, height / 2);
    var x = random(-r / 2.0, r / 2.0);
    var y = random(-r / 2.0, r / 2.0);
    strokeWeight(2);
    if (dist(0,0,x,y) < r/2.0) {
        counter++;
        total ++;
        stroke(0,255,0);
        point(x,y);
    }
    else {
        total++;
        stroke(255,0,0);
        point(x,y);
    }
}

function draw()
{
    translate(width/2,height/2);
    //can.clear();

    //background(0);
    // noFill();
    // stroke(255);
    // ellipse(0,0,r*2,r*2);

    noFill();
    stroke(255);
    strokeWeight(1);
    ellipse(0,0,r,r);


    for(var i =0;i<50;i++)
        throwDart();
    fill(255);
    textSize(32);
    textAlign(CENTER,CENTER);
    pie = 4*counter/total;
    var val = pie.toFixed(16);
    //p.html(pie);
    rectMode(CENTER);
    fill(0);
    noStroke();
    //stroke(255);
    rect(0,0,textWidth(val),40);
    fill(255);
    text(val,0,0);


}