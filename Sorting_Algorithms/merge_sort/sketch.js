let values = [];
    let w = 10;
let merging = false
let poc = 0
let pocs = 0
    function setup() {
      createCanvas(800, 400);
      for (let i = 0; i < width / w; i++) {
        values.push(random(height));
      }
      mergeSort(values, 0, values.length - 1);
      textSize(40);
    }

    async function mergeSort(arr, start, end) {
      if (start < end) {
        let mid = floor((start + end) / 2);
        await mergeSort(arr, start, mid);
        await mergeSort(arr, mid + 1, end);
        await merge(arr, start, mid, end);
      }
    }

    async function merge(arr, start, mid, end) {
      let n1 = mid - start + 1;
      let n2 = end - mid;

      let left = new Array(n1);
      let right = new Array(n2);

      for (let i = 0; i < n1; i++) {
        left[i] = arr[start + i];
      }
      for (let j = 0; j < n2; j++) {
        right[j] = arr[mid + 1 + j];
      }

      let i = 0;
      let j = 0;
      let k = start;

      while (i < n1 && j < n2) {
        if (left[i] <= right[j]) {
          arr[k] = left[i];
          i++;
        } else {
          arr[k] = right[j];
          j++;
        }
        k++;
      }
      poc = k
      redraw();
      while (i < n1) {
        arr[k] = left[i];
        i++;
        k++;
      }
      
      redraw();
      while (j < n2) {
        arr[k] = right[j];
        j++;
        k++;
      }

      await sleep(80); // Adjust the delay according to your preference
      merging = true
      poc = end
      redraw();
      await sleep(150)
    }

    function draw() {
      background(125);
      fill(0);
      text('Merge Sort', 20, 50);
      simulatesort();
      
    }
    let c = 0
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