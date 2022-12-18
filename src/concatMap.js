import { fromEvent, interval } from "rxjs";
// transform data pipeable operators
import { map, switchMap, take, tap, concatMap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
const button = document.querySelector('#btn')


const observable = fromEvent(
    button, 'click'
).pipe(
    // This will not allow requests to overlap, it will queue the requests
    concatMap(() => {
        return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').pipe(

            take(5), // put it here to let the outer observable keep running - this way we can restart it any time
            tap({
                complete(){
                    console.log("inner observable completed")
                }
            }), // add tap inside another pipe function to spy on the values
            )
    }),
    // take(5) // limit the values by 5 no matter how many times we click if we put this here - we cannot restart by clicking the button again
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