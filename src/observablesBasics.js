import { Observable } from "rxjs";


// Push based - the next function is needed
const observable = new Observable((subscriber) => {
    subscriber.next('Hello world')
    subscriber.next('Test')

    subscriber.error("Throwing an error") // IF an error is thrown the observable is terminated and nothing else will run

    // Prevent the observale from sending any more data (avoid memory leak)
    subscriber.complete()
})


// This is the observer that can subscribe
const subscripction = observable.subscribe({
    // Handles data pushed from the observable
    next: (value) => {
        console.log(value)
    },
    complete: () => {
        console.log("Complete called")
    },
    error: (error) => {
        console.error(error)
    }
})








