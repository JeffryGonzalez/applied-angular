import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export  class MyCounter { 
    
    counterUp(): void {
        counterValue.update(value => value + countBy());
    }
    counterDown(): void {
        counterValue.update(value => value - countBy());
    }
    countByValue(value: number): void {
        countBy.set(value);
    }
}



export const countByValues = [1, 3, 5];
export const countBy = signal<number>( countByValues[0]);
export const counterValue = signal<number>(0);