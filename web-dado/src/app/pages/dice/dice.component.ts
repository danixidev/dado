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

  private diceThrow: number = 0
  private diceHistoric: Array<number> = [];

  constructor(
    private clipboard: Clipboard,
    private snackBar: MatSnackBar
  ) { }

  public rollDice(): void {
    let diceValue: number = 0
    if (localStorage.getItem('useSequence') === 'true') {
      diceValue = JSON.parse(localStorage.getItem('data') || '[]')[this.diceThrow]
      this.diceThrow++
    } else {
      diceValue = Math.floor((Math.random() * 6) + 1);
    }

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
      this.snackBar.open('No hay datos para copiar')
      return;
    }
    this.clipboard.copy(JSON.stringify(this.diceHistoric));
    this.snackBar.open('Datos copiados correctamente', undefined, { duration: 2000 })
  }
}
