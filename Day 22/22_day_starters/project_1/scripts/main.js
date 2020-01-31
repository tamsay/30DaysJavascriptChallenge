let body = document.querySelector('body');
body.setAttribute('style','background-color : #45eeaa; text-align : center');
let h3 = document.querySelector('h3');
let divWwrapper = document.querySelector('.wrapper');
divWwrapper.style.backgroundColor = 'none';

let numArray =()=>{
    let result = [];
    for(x=0; x <= 101; x++){
        result.push(x)
    }
    return result;
}
let isPrime = (num) =>{
    if(num == 0 || num == 1){
        return false;
    }
    else{
    for (x=2; x < num ; x++){
        if(num % x === 0){
            return false;
        }
    }
        return true;
 }
}
let table = (numOfRows)=>{
    var data = numArray();
    // DRAW HTML TABLE
    // let perrow = numOfRows; // 10 items per row
     let   count = 0; // Flag for current cell
       let  table = document.createElement("table");
      let  row = table.insertRow();
      table.setAttribute('id' , 'numberTable');
      // table.style.alignItems = 'center'
      table.setAttribute('align' , 'center');

  
    for (var i of data) {
      var cell = row.insertCell();
      if(i % 2 === 0){  // Even Numbers check
        cell.innerHTML = i;
        cell.setAttribute('style' , 'background-color : green ; font-size : 40px');
        cell.classList = 'tabledata even'
      }
      else {   // Odd Numbers check
        cell.innerHTML = i;
        cell.setAttribute('style' , 'background-color : yellow ; font-size : 40px');
        cell.classList = 'tabledata odd'
      }
      if(isPrime(i) === true){  // Prime Numbers check
        cell.innerHTML = i;
        cell.setAttribute('style' , 'background-color : red ; font-size : 40px');
        cell.classList = 'tabledata prime'
      }         
      // Break into next row
      count++;
      if (count % numOfRows === 0) {
        row = table.insertRow();
      }
    }
    // ATTACH TABLE TO CONTAINER
    divWwrapper.appendChild(table);
  }
  table(10);
let tdStyle = document.querySelectorAll('.tabledata')
for(item of tdStyle){
    item.style.padding = '0.2em';
    item.style.border = '5px solid white';
    item.style.fontSize = '25px';
}


/*
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

:root {
    --grid-cols: 1;
    --grid-rows: 1;
  }
  
  #container {
    display: grid;
    grid-gap: 1em;
    grid-template-rows: repeat(var(--grid-rows), 1fr);
    grid-template-columns: repeat(var(--grid-cols), 1fr);
  }
  
  .grid-item {
    padding: 1em;
    border: 1px solid #ddd;
    text-align: center;
  }
  <div id="container">
  </div>
*/ 