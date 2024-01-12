// sketch.js
let values =[];
let len =100
let i =0
let j= 0
function setup() {
    createCanvas(1200, 600); // Set the size of the canvas
    for(let i = 0; i < len ; i++){
      values.push(random(height));
  }   
  insertionSort()

}

function insertionSort(){

    start = 0
    for(i =1; i < values.length;i++){
        insert(i)      
    }
    noLoop()
}

function insert(i){
    while(i > 0){
        if(values[i] < values[i-1]){
            let temp = values[i]
            values[i] = values[i-1]
            values[i-1]  = temp
            i--
            redraw()
        }
        else break
    }

}
function draw(){
    background(255)
    fill(0)
    text('Insertion Sort', 20, 50);
    simulatesort()
}

function simulatesort()
{ 
  
  
  for(let x = 0; x <= len;x++)
  {
    b = width/len
    stroke(0);
    if(x == j || x >= len - i-1)
      fill(255,0,0)
    else
      fill(255,105,0);
    rect(x*b,height-values[x],b,values[x],20);
  }
  
}