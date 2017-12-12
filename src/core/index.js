import '../styles/index.css'
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
      </div>
    </main>
   
  </div>
`

document.body.innerHTML = html;
let output = document.getElementById('___output')

let designDiv = document.getElementById('designDiv')

export const design = (html) => {

    designDiv.innerHTML = html;
    
}
    

export const log = (data) => {
  let p = document.createElement('pre')
  p.classList.add('output_line')
  let __content = '';
  switch(typeof(data)) {

    case 'object': 
        __content = JSON.stringify(data, undefined,2);
        break;
    default:
      __content = data;

  }
  p.innerHTML = __content;
  console.log(data)
  output.appendChild(p)
}



