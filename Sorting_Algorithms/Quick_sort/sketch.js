let values = [];
    let w = 10;
let poc = 0
    function setup() {
      createCanvas(800, 400);
      for (let i = 0; i < width / w; i++) {
        values.push(random(height));
      }
      console.log(values.join(" "));
      quickSort(values, 0, values.length - 1);
     
      console.log(values.join(" "));
      textSize(40);
    }

    async function quickSort(arr, start, end) {
      if (start < end) {
        let pi = await partition(arr,start,end)
        await Promise.all([
        quickSort(arr, start, pi-1),
        quickSort(arr, pi+1, end)
        ]);
      }
    }

    async function partition(arr, low, high,) {
        
        let pivot =arr[high]
        
        
        let i = low -1
        for(let j = low; j < high; j++){
            if(arr[j] < pivot){
                i++;
                
                await swap(arr,i,j)
            }
        }
        await swap(arr,i+1,high)
        
        redraw();
        return i+1
    }
    async function swap(arr,i,j)
    {
        await sleep(50);
        temp =arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        
        
    }
    function draw() {
      background(125);
      fill(0);
      text('Quick Sort', 20, 50);
      simulatesort();
      
    }
    
   async function simulatesort(){
      
      for (let i = 0; i < values.length; i++) {
        if(i == poc){
          fill(255, 0, 0);
          stroke(0)
          rect(i * w, height - values[i], w, values[i],20);  
        }
        else{
        fill(255, 125, 0);
        stroke(0)
        rect(i * w, height - values[i], w, values[i],20);
        }
      }
    }
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }