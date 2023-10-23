import { Component, ViewChild } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent {

  @ViewChild('dice', { static: false }) dice: any;
  public disableDice: boolean = false;
  public shownDiceValue: number = 0;
  public oldDiceValue: number = -1;

  private diceHistoric: Array<number> = [];

  constructor(
    private clipboard: Clipboard,
    private snackBar: MatSnackBar
  ) { }

  public rollDice(): void {
    let diceValue = Math.floor((Math.random() * 6) + 1);

    for (var i = 1; i <= 6; i++) {
      this.dice.nativeElement.classList.remove('show-' + i);

      if (diceValue === i) {
        this.dice.nativeElement.classList.add('show-' + i);
      }
    }

    this.disableDice = true;
    setTimeout(() => {
      if (this.shownDiceValue != 0) this.oldDiceValue = this.shownDiceValue;
      this.shownDiceValue = diceValue;
      this.diceHistoric.push(diceValue);

      this.disableDice = false;
    }, 1000);
  }


  public exportData() {
    if (this.diceHistoric.length === 0) {
      this.snackBar.open('No hay datos para exportar')
      return;
    }
    this.clipboard.copy(JSON.stringify(this.diceHistoric));
    this.snackBar.open('Datos exportados correctamente')
  }
}
