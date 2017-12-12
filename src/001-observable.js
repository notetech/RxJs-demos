import Rx from 'rxjs/Rx';

var observable = Rx.Observable.create(function (observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
      observer.next(4);
      observer.complete();
    }, 1000);
  });

  observable.subscribe(
      data => {
          console.log('>', data)
      },
      error => {
          console.log('Some error')
      },
      () => {
          console.log('Completed')
      }
  )