import { Observable, interval, timer, fromEvent } from "rxjs";

// Using declarive functions 

const observable = fromEvent(
    document, 'click'
)

const subscripction = observable.subscribe(console.log)



