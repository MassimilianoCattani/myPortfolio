
const cvs = document.getElementById('tetris');
const ctx = cvs.getContext("2d");
const scoreDisplay = document.getElementById('score');

const ROW = 20;
const COL = COLUMN = 10;
const SQ = squareSize = 20; //<--single square
const VACANT = "#fff"; //<--color of the empty square

//draw the square
function drawSquare(x, y, color){
    ctx.fillStyle = color;
    ctx.fillRect(x*SQ, y*SQ, SQ, SQ);

    ctx.strokeStyle = '#999';
    ctx.strokeRect(x*SQ, y*SQ, SQ, SQ);
}
//create board--> 2d array
//here the board is not yet visible on the canvas.
let board = [];
for(r = 0; r < ROW; r++){
    board[r] = [];//<--set all the row as empty arr. We will have 20 empty arrs: the rows.
    for(c = 0; c < COL; c++){ //each row will have c = COL columns.
        board[r][c] = VACANT; //<-- every square of the board.
    }
}
// draw board to the canvas
//the square them-selves create the grid...so VACANT = empty.
//here we put phisically the board on the canvas.
function drawBoard(){
    for(r = 0; r < ROW; r++){
        for(c = 0; c < COL; c++){
            drawSquare(c, r, board[r][c]);
        }
    }
}
drawBoard();
//pieces and their color
const PIECES = [
    [Z, '#FF50FF'],
    [S, '#008000'],
    [T, '#00d3b6'],//5428cf
    [O, '#0000FF'],
    [L, '#800000'],
    [I, '#ff0000'],
    [J, 'orange']
];
//initiate the piece
//let p = new Piece(PIECES[0][0], PIECES[0][1]);//<--1 is the color
//------------------------p is the generated random piece------------------
function randomPiece(){
    let r = randomN = Math.floor(Math.random() * PIECES.length) //--> retrun n between 0-6.
    return new Piece(PIECES[r][0], PIECES[r][1]);
}
let p = randomPiece();

//the object piece
function Piece(tetromino, color){
    this.tetromino = tetromino;
    this.color = color;

    this.tetrominoN = 0;//<--we start from the first pattern.
    this.activeTetromino = this.tetromino[this.tetrominoN];

    //piece control <--we declare the coordinate
    this.x = 3;
    this.y = -2;
}
//fill function 
Piece.prototype.fill = function(color){
    for(r = 0; r < this.activeTetromino.length; r++){
        for(c = 0; c < this.activeTetromino.length; c++){
            //we draw only the occupied squares
            if(this.activeTetromino[r][c]){
                drawSquare(this.x + c, this.y + r, color);
            }
        }
    }
}
//draw a piece to the board
Piece.prototype.draw = function(){
    this.fill(this.color);
    /*
    for(r = 0; r < this.activeTetromino.length; r++){
        for(c = 0; c < this.activeTetromino.length; c++){
            //we draw only the occupied squares
            if(this.activeTetromino[r][c]){
                drawSquare(this.x + c, this.y - r, this.color);
            }
        }
    } // now fill hold the functionality of draw() and unDraw()..difference based on color: this.color vs VACANT*/
}
//undraw a piece

Piece.prototype.unDraw = function(){
    this.fill(VACANT);

    /*
    for(r = 0; r < this.activeTetromino.length; r++){
        for(c = 0; c < this.activeTetromino.length; c++){
            //we draw only the occupied squares
            if(this.activeTetromino[r][c]){
                drawSquare(this.x + c, this.y - r, VACANT);
            }
        }
    }*/
}

//Drop the piece down.--------------------------------------------------------------
Piece.prototype.dropDown = function(){
    for(r = this.y; r <= ROW; r++){
        
            this.moveDown();
        
    }
}
//move the piece down.
Piece.prototype.moveDown = function(){
    if(!this.collision(0,1,this.activeTetromino)){
        this.unDraw();
        this.y++;
        this.draw(); //<-- we re-draw the piece in new pos.
    }else{
        //we lock the piece and we generate a new one.
        this.lock();
        p = randomPiece();
    }
}
//move the piece right.
Piece.prototype.moveRight = function(){
    if(!this.collision(1,0,this.activeTetromino)){
        this.unDraw();
        this.x++;
        this.draw(); //<-- we re-draw the piece in new pos.
    }
}
//move the piece left.
Piece.prototype.moveLeft = function(){
    if(!this.collision(-1,0,this.activeTetromino)){
        this.unDraw();
        this.x--;
        this.draw(); //<-- we re-draw the piece in new pos.
    }
}
//rotate the piece
Piece.prototype.rotate = function(){
    let nextPattern = this.tetromino[(this.tetrominoN + 1)%this.tetromino.length];
    let kick = 0;
    if(this.collision(0,0,nextPattern)){
        if(this.x > COL/2){
            //right wall
            kick = -1; // move piece to the left
        }else{
            //left wall 
            kick = 1; // move the pieces to the right;
        }
    }
    if(!this.collision(kick,0,nextPattern)){
        this.unDraw();
        this.x += kick;
        this.tetrominoN = (this.tetrominoN + 1)%this.tetromino.length;//--> ex:(0+1)%4 => 1.
        this.activeTetromino = this.tetromino[this.tetrominoN]; //update activeTetromino.
        this.draw(); //<-- we re-draw the piece in new pos.
    }
}

let score = 0;


//function lock
Piece.prototype.lock = function(){
    for(r = 0; r < this.activeTetromino.length; r++){
        for(c = 0; c < this.activeTetromino.length; c++){
            //we skip the vacant square
            if(!this.activeTetromino[r][c]){
                continue;
            }
            //piece to be lock on top of the board(game over)
            if(this.y + r < 0){
                alert('GAME OVER');
                //stop requestAnimationFrame
                gameOver = true;
                break;
            }
            //lock the piece
            board[this.y + r][this.x + c] = this.color;
        }
    }
    //remove the full rows
    for(r = 0; r < ROW; r++){
        let isRowFull = true;
        for(c = 0; c < COL; c++){
            isRowFull = isRowFull && (board[r][c] != VACANT);
        }
        if(isRowFull){
            //if row full we must move down all the rows above it.
            for(y = r; y > 1; y--){
                for(c = 0; c < COL; c++){
                    board[y][c] = board[y-1][c];
                }
            }
            //the top row[0] has not rows above it
            //so we must recreate it
            for(c = 0; c < COL; c++){
                board[0][c] = VACANT;
            }
            //increment score by 1
            score += 1;
            
        }
    }
    //update the board by drawing it again
    drawBoard();

    //update score
    scoreDisplay.innerHTML = score; 
   
}
// collision function
Piece.prototype.collision = function(x, y, piece){
    for(r = 0; r < piece.length; r++){
        for(c = 0; c < piece.length; c++){
            //if the square is empty we skip it
            if(!piece[r][c]){
                continue;
            }
            //coordinate of piece after move.
            let newX = this.x + c + x;
            let newY = this.y + r + y;

            //condition
            
            if(newX < 0 || newX >= COL || newY >= ROW){
                
                return true;
            }
            
            //skip newY < 0 if board[-1] or it will crush the game. refer to the top;
            if(newY < 0){
                continue;
            }
            //check if there is a locked piece already in place
            if(board[newY][newX] != VACANT){ //<-- if not vacant the piece will hit a locked piece;
                return true;
            }
            

        }
    }
    return false;
}


//control the pieces
document.addEventListener('keydown', CONTROL);
function CONTROL(event){
    if(event.keyCode == 37){
        p.moveLeft();
       // dropStart = Date.now();
    }else if(event.keyCode == 38){
        p.rotate();
       // dropStart = Date.now();
    }else if(event.keyCode == 39){
        p.moveRight();
       // dropStart = Date.now();
    }else if(event.keyCode == 40){
        p.moveDown();
    }else if(event.keyCode == 32){
        p.dropDown();
    }   
}
//mobile controller
const Commands = document.querySelectorAll('.btn');
for(i = 0; i < Commands.length; i++){
    Commands[i].addEventListener('click', controlMob);
        function controlMob(e){
        
            if(e.target.classList.contains('btn-left')){
                p.moveLeft();
            }else if(e.target.classList.contains('btn-rotate')){
                p.rotate();
            }else if(e.target.classList.contains('btn-right')){
                p.moveRight();
            }else if(e.target.classList.contains('btn-down')){
                p.moveDown();
            }else if(e.target.classList.contains('btn-drop')){
                p.dropDown();
            }
            e.preventDefault();
        }
}

/*
function changeLevel(points){
    let level;
    if(points >= 70){
        level = 10;
    }else if(points >=60){
        level = 9;
    }else if(points >= 50){
        level = 8;
    }else if(points >= 40){
        level = 7;
    }else if(points >= 30){
        level = 6;
    }else if(points >= 25){
        level = 5;
    }else if(points >= 20){
        level = 4;
    }else if(points >= 15){
        level = 8;
    }else if(points >= 10){
        level = 2;
    }else if(points >= 5){
        level = 1;
    }else{
        level = 0;
    }
    return level;
}
*/



//move piece down every one second
  
    let dropStart = Date.now();
    let gameOver = false;
    function drop(){
        let now = Date.now();
        let delta = now - dropStart;
        
            if(delta > 1000){
                p.moveDown();
                dropStart = Date.now();
            }    
            if(!gameOver){
                requestAnimationFrame(drop);
            }
        console.log('ciao'); 
    }
    drop();
