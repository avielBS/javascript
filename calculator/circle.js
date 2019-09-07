var body = document.body;
var canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext('2d');

var index = 0;
var shapes = [];

function addShape(){
    let rnd = Math.floor(Math.random()*2);
    if (rnd === 1)
        addCircle();
    else
        addRectangle();
}

function addRectangle(){
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let width = Math.random() * 100;
    let height = Math.random() * 100;
    let color = getRndColor();  

    context.beginPath();
    context.fillStyle=color
    context.fillRect(x, y, width, height);

    shapes.push({
                locationX : x,
                locationY : y,
                width:width,
                height:height,
                type:"rectangle",
                color : color
    })

}

function addCircle(){

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let radius = Math.random() * 100;
    let color = getRndColor();

    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, false);
    context.fillStyle = color;
    context.fill();


    shapes.push({ locationX : x,
                  locationY : y,
                  rad:radius,
                  type:"circle",
                  color : color
                });

}

function clearCancas(){
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function removeShape(){
    clearCancas();
    
    shapes.pop();    

    shapes.forEach(shape => {
        if(shape['type'] === "circle"){
            context.beginPath();
            context.arc(shape['locationX'], shape['locationY'], shape['rad'], 0, 2 * Math.PI, false);
            context.fillStyle = shape['color'];
            context.fill();

        }else if(shape['type'] === "rectangle"){
            context.beginPath();
            context.fillStyle = shape['color'];
            context.fillRect(shape['locationX'], shape['locationY'], shape['width'], shape['height']);

        }

    });
}

function getRndColor() {
    var r = 255*Math.random()|0,
     g = 255*Math.random()|0,
     b = 255*Math.random()|0;
   return 'rgb(' + r + ',' + g + ',' + b + ')';
 }

