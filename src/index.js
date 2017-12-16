
import { log, design } from './core';
import Rx from 'rxjs/Rx';

design(`
<button>Click</button>
`)
let __button = document.querySelector('button');
  Rx.Observable.fromEvent(__button, 'click')
    .throttleTime(5000) // Delay 5 second 
    .scan((count) => count+1 , 0) // Modify data
    .subscribe((count) => {
        log(count,'Yep')
        log('its working')
        __button.textContent = count;
      });
