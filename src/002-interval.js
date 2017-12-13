import { design, log } from './core'
import Rx from 'rxjs';

let observable = Rx.Observable.interval(2000)

observable.subscribe(
    data => {
        log('Hello')
    }
)