import { design, log } from './core'
import Rx from 'rxjs';

// Timer 
const timer =Rx.Observable.timer(1000)

timer.subscribe(
    data => {
        log('Timer : ',data)
    }
)



//Interval

let observable = Rx.Observable.interval(2000)

observable.subscribe(
    data => {
        log('Interval', 'Hello')
    }
)