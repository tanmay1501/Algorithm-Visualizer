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
  textSize(40);
}
  
  function draw() {
    // Set the background color
    background(225)
    fill(0);
    text('Bubble Sort', 20, 50);
    bubblesort();
    simulatesort();

  }
  
  function bubblesort(){
    if(i < len){
      
    for(let k =0 ; k<18;k++){          
      if(values[j] > values[j+1]){
        let temp = values[j]
        values[j] = values[j+1]
        values[j+1] = temp
      }
      j++
      if(j== len - i-1){
        j =0
        i ++;
      }
    }
    
  }
  else{
      noLoop();
    }
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
  
