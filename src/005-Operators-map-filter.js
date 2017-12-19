import { design, log } from './core'

import rx from 'rxjs';


let users = [
    {
        name: 'Sarath',
        point: 9
    }
    ,{
        name : 'Poi',
        point: 8
    },
    {
        name: 'Yoshi',
        point:3
    },
    {
        name: 'Boss',
        point: 4
    }
]

const source = rx.Observable.from(users)
source
    .filter(data => data.point > 5) // Filtering data
    .map( data => data.name) // Transform data  to Only name
    .subscribe(
    data => {
        log('Name ', data)
    }
)