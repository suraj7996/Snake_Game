

var canvas = document.getElementById("snake");
var ctx = canvas.getContext("2d");
console.log(canvas);

const grid = 32;


//load img
var g = document.getElementById("img");
// ctx.drawImage(g,0,0);

const foodImg = new Image();
foodImg.src = "food.png";

let snake = [];

snake[0] = {
    x: 9 * grid,
    y: 10 * grid
};

let food = {
    x : Math.floor(Math.random()*17+1) * grid,
    y : Math.floor(Math.random()*15+1) * grid
}

function draw()
{
    ctx.drawImage(g,0,0);

    for(let i = 0; i < snake.length;i++ ){
        ctx.fillStyle = (i == 0 )? "red" : "black";
        ctx.fillRect(snake[i].x, snake[i].y,grid,grid);

        ctx.strokeStyle = "white";
        ctx.strokeRect(snake[i].x, snake[i].y,grid,grid);

    }

    ctx.drawImage(foodImg, food.x, food.y);
}

var game = setInterval(draw,100);