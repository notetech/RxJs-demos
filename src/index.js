
import { log, design } from './core';
import Rx from 'rxjs/Rx';

design(`
<button>Click</button>
`)
let __button = document.querySelector('button');
  Rx.Observable.fromEvent(__button, 'click')
    //.throttleTime(5000) // Delay 5 second 
    .scan((count) => count+1 , 0) // Modify data
    .subscribe((count) => {
        console.log(`Clicked! ${count}`)
        log(count)
        log({hello:'msg'})
        __button.textContent = count;
      });
