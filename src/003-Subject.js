import { log, design} from './core';
import rx from 'rxjs';

const subject = new rx.Subject();

const subscription = subject.subscribe(

    data => {
        log('Next data '+ data)
    },
    error => log('Error'),
    () => log('Completed')
)

subject.next(10)
subject.next(50)
subject.complete();
