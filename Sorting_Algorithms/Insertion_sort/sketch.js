// sketch.js
let values =[];
let len =100
let poc = 0
let end =0
function setup() {
    createCanvas(1200, 600); // Set the size of the canvas
    for(let i = 0; i < len ; i++){
      values.push(random(height));
  }   
  insertionSort()
  textSize(40);
}

async function insertionSort(){

    start = 0
    for(i =1; i < values.length;i++){
        await insert(i)      
    }
    noLoop()
}

async function insert(i){
    end =i
    while(i > 0){
        if(values[i] < values[i-1]){
            await sleep(20)
            let temp = values[i]
            values[i] = values[i-1]
            values[i-1]  = temp
            i--
            poc =  i
            
            redraw()
        }
        else break
    }

}
function draw(){
    background(125)
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
    if(x == poc || x == end)
      fill(255,0,0)
    else
      fill(255,105,0);
    rect(x*b,height-values[x],b,values[x],20);
  }
  
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }