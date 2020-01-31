// console.log(countries)
document.querySelector('body').style.textAlign = 'center'
let countryDiv = document.querySelector('.countries-wrapper')

let table = (numOfRows)=>{
    var data = countries;

    // DRAW HTML TABLE
     let   count = 0; // Flag for current cell
     let table = document.createElement('table');
     table.setAttribute('id' , 'countriesTable')
     let  row = table.insertRow();
     table.setAttribute('align' , 'center');

    for (var i of data) {
      var cell = row.insertCell();
        cell.innerHTML = i;
        cell.style.border = '1px solid green';
        cell.style.textAlign = 'center'
        cell.style.fontSize = '14px'
        cell.style.fontWeight = 'bold'
        cell.style.fontFamily = 'arial'
        cell.style.padding = '10px'
        cell.style.textTransform = 'uppercase'
        cell.classList = 'cell value'
                
      // Break into next row
      count++;
      if (count % numOfRows === 0) {
        row = table.insertRow();
      }
    }
    // ATTACH TABLE TO CONTAINER
    countryDiv.appendChild(table);
  }
  table(6);

  let allCells = document.querySelectorAll('.cell');
      [...allCells].map(element=>{
        element.addEventListener('click', ()=>{
            alert(element.textContent)
        })
      });


