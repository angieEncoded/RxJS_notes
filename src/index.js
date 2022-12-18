import { fromEvent, interval } from "rxjs";
// transform data pipeable operators
import { map, exhaustMap, take, tap, concatMap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
const button = document.querySelector('#btn')

// See various surrounding files for notes