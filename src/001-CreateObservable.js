import { design, log } from './core';
import Rx from 'rxjs/Rx';

design(`
    <h1>Create Observable</h1>
`)



var observable = Rx.Observable.create((observer) =>{
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
      observer.next(4);
      observer.complete();
    }, 3000);
  });



  

  observable.subscribe(
      data => {
          log(data)
      },
      error => {
          log('Some error')
      },
      () => {
          log('Completed')
      }
  )