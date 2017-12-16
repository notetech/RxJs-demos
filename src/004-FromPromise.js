import { log , design } from './core'
import rx from 'rxjs';

const SamplePromise = () => {
    log('SamplePromise Called')
    return new Promise((resolve, reject) => {

        setTimeout(()=> {
            log('SamplePromise :: Ready to Resolve')
            resolve('Hello World')
            //reject(new Error('Something goes wrong'))
        },2000)

    })
}

/** Normal Promise */
SamplePromise().then(data => {
    log('Promise Resolved')
})

/** Observable from Promise */

let myPromise = SamplePromise();

let source$ = rx.Observable.fromPromise(myPromise)

source$.subscribe(
    data => {
        log(data);
    },
    err => log('Error', err),
    () => {
        log('Completed')
    }
)