// Creation operators
import { of, from, fromEvent, interval } from "rxjs";
// transform data pipeable operators
import { map, filter, pluck, reduce, take } from 'rxjs/operators'

// Using declarive functions

// Note, pluck is deprecated
// const observable = fromEvent(document, 'keydown').pipe(map(event => event.code ))
const observable = interval(500).pipe(

    // Passes the value to the next in the chain. If the limit has been reached it will turn off the observable
    take(5),

    // Function and a seed value (we will start at 0)
    reduce((accumulator, value) => accumulator + value, 0)



    )
const subscription = observable.subscribe({
    next(value) {
        console.log(value)
    },
    complete(){
        console.log('complete')
    }
})




console.log('hello')
















