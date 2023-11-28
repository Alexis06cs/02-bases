import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
        <p>Tengo {{counter}} anios</p>
        <button (click)="Incrementoby(2)">Mas uno</button>
        <button (click)="decrementoby(2)">Menos uno</button>
        <button (click)="porcinco(2)">x5</button>
        <button (click)= "restore()">restore</button>
        <hr>

  `
})

export class CounterComponent {

  public counter: number = 10;

  Incrementoby (value : number) {
   this.counter = this.counter += value;
  }
  decrementoby (value : number) {
   this.counter = this.counter -= value;
  }
  porcinco(value : number) {
   this.counter = this.counter *= value;
  }

  restore(){
   this.counter = 10;
  }


}
