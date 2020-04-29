var database;
var canvas;
var drawing = [];
var db_drawing = [];

function setup(){
    createCanvas(500,500);
    canvas = createCanvas(500,500);
    database = firebase.database();
    
}

function draw()
{
    background("white");
    readData();
    stroke(255) 
    strokeWeight(5); 
    fill("black");
    for(var i=0; i<db_drawing.length; i++)
    {
        console.log(db_drawing[i].x);
        stroke('purple'); // Change the color
       strokeWeight(10); 
        point(db_drawing[i].x,db_drawing[i].y);
    }
}

function mouseDragged()
{
    var point = 
    {
        x : mouseX,
        y : mouseY
    }
    drawing.push(point);
    var drawRef = database.ref("drawing")
    drawRef.set({
        "d" : drawing
    })
}
function readData() 
{ 
    database.ref('drawing/').on('value', (data) => { 
        db_drawing = data.val().d }) 
}