import { of } from "rxjs";

// Using declarive functions

// of has unlimited arguments
const observable = of(1,2,3,4,5) // synchronous. Will not loop through an array
// const observable = of([1,2,3,4,5]) // This will just be output as [1,2,3,4,5]


const subscripction = observable.subscribe({
    next(value) {
        console.log(value)
    },
    complete(){
        console.log('complete')
    }
})

console.log('hello')



