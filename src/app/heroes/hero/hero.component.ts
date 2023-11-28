import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 10;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  HeroeDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeName():void {
    this.name = 'Batman';
  }

  changeAge():void {
    this.age = 26;
  }


}
