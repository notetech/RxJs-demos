/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

// ================================
// START YOUR APP HERE
// ================================
import Rx from 'rxjs/Rx';

// ================================
// First Example

/* Observable from event */
var button = document.querySelector('button');
button.textContent = 0;
Rx.Observable.fromEvent(button, 'click')
  .throttleTime(5000)
  .scan((count) => count+1 , 0)
  .subscribe((count) => {
      console.log(`Clicked! ${count}`)
      button.textContent = count;
    });
