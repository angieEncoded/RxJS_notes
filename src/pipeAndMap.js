import { of, from } from "rxjs";
import { map } from 'rxjs/operators'

// Using declarive functions

// of has unlimited arguments
// const observable = from([1,2,3,4,5]) // will flatten any array it's given
const observable = of(1,2,3,4,5)

const numbersWithSymbol = observable.pipe(map(value => `$${value }`))

const subscription = observable.subscribe({
    next(value) {
        console.log(value)
    },
    complete(){
        console.log('complete')
    }
})

const subscription2 = numbersWithSymbol.subscribe({
    next(value) {
        console.log(value)
    },
    complete(){
        console.log('complete')
    }
})



console.log('hello')






