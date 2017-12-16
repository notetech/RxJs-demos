import './styles/index.css'
import Rx from 'rxjs/Rx';
let html = `
  <div class="container">
    <header>
    <h2>RXJS</h2>
    </header>
    <main>
      <div class="area-design" id="designDiv">
          
      </div>
      <div class="area-output" id="___output">
        <div class="__output_header">
          <div class="__output_title">Console</div><button type="button" id="___output_clear">CLEAR</button>
        </div>
      </div>
    </main>
   
  </div>
`

document.body.innerHTML = html;
let output = document.getElementById('___output')

let designDiv = document.getElementById('designDiv')


let clearBtn = document.getElementById('___output_clear')

clearBtn.addEventListener('click',(e) => {
  let outputlines = document.querySelectorAll('.___output_line')

  if(outputlines) {
    outputlines.forEach((ol) => {
      ol.remove();
    })
  } 

})

export const design = (html) => {

    designDiv.innerHTML = html;
    
}
    

export const log = (data, data2 = '') => {
  let p = document.createElement('pre')
  p.classList.add('___output_line')
  let __content = '';
  p.innerHTML = stringify(data)
  console.log(data, data2)
  if( data2 ) {
    let span = document.createElement('span')
    span.classList.add('___output_line2')
    span.innerHTML = stringify(data2)
    p.appendChild(span);
  }
  output.appendChild(p)


}

const stringify = (data) => {
  let _string = '';
  switch(typeof(data)) {
  
    case 'object': 
      _string = JSON.stringify(data, undefined,2);
        break;
    default:
      _string = data;
  
  }

  return _string;
  
}



