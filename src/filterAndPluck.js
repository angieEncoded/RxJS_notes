import { of, from, fromEvent } from "rxjs";
import { map, filter, pluck } from 'rxjs/operators'

// Using declarive functions

// Note, pluck is deprecated
// const observable = fromEvent(document, 'keydown').pipe(map(event => event.code ))
const observable = fromEvent(document, 'keydown').pipe(
    pluck('code'),
    filter(code => code === "Space")
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



