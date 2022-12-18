import { Observable, interval, timer } from "rxjs";

// Using declarive functions 

const observable = interval(1000)

// fine tune the delay of each value
const timer_observable = timer(0, 1000)


// This is the observer that can subscribe
const subscripction = observable.subscribe(console.log)

const timer_subscription = timer_observable.subscribe(console.log)









