// Creation operators
import { interval } from "rxjs";
// transform data pipeable operators
import { tap, take, reduce } from 'rxjs/operators'

// Using declarive functions

const observable = interval(500).pipe(

    // Passes the value to the next in the chain. If the limit has been reached it will turn off the observable
    take(5),

    tap({
        next(val) {
            console.log(val)
        }
    }), // checkpoint for viewing the values in our pipeline
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