import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit {

  @ViewChild('dice', { static: false }) dice: any;
  public disableDice: boolean = false;
  public diceValue: number = 0;
  public oldDiceValue: number = -1;

  ngOnInit(): void {
    // this.dice.nativeElement.classList.add('show-' + 3);
  }

  public rollDice(): void {
    if (this.diceValue != 0) this.oldDiceValue = this.diceValue;
    this.diceValue = Math.floor((Math.random() * 6) + 1);
    this.displayNumber(this.diceValue);

    for (var i = 1; i <= 6; i++) {
      this.dice.nativeElement.classList.remove('show-' + i);

      if (this.diceValue === i) {
        this.dice.nativeElement.classList.add('show-' + i);
      }
    }

    this.disableDice = true;
    setTimeout(() => {
      this.disableDice = false;
    }, 1000);
  }

  private displayNumber(value: number): void {

  }
}
