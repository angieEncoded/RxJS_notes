import { Observable } from "rxjs";


const observable = new Observable((subscriber) => {

    // This is still running, we have a leak
    const id = setInterval(() => {
        subscriber.next('test')
        console.log('leak')
    }, 1000)

    // subscriber.complete() // Turns off the Observable

    // We are responsible for cleaning memory in an observable
    return () => {
        clearInterval(id)
    }

}) 

console.log('before')


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


// This will unsubscribe and we won't see the messages anymore
setTimeout(() => {
    subscripction.unsubscribe()
}, 4000);


console.log('after')


