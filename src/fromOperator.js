import { from } from "rxjs";

// Using declarive functions

// of has unlimited arguments
// const observable = from([1,2,3,4,5]) // will flatten any array it's given
const observable = from(fetch('https://jsonplaceholder.typicode.com/todos/1')) // will also flatten any promise it's given

const subscripction = observable.subscribe({
    next(value) {
        console.log(value)
    },
    complete(){
        console.log('complete')
    }
})

console.log('hello')







