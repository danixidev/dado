import { Component, OnInit, ViewChild } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit {

  private sequence: Array<number> = []

  @ViewChild('dice', { static: false }) dice: any;
  public disableDice: boolean = false;
  public shownDiceValue: number = 0;
  public oldDiceValue: number = -1;

  private diceThrow: number = 0
  private diceHistoric: Array<number> = [];

  public points: number = 0;
  public previousPoints: number = 0;

  constructor(
    private clipboard: Clipboard,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.sequence = JSON.parse(localStorage.getItem('data') || '[]')
  }

  public rollDice(): void {
    let diceValue: number = 0
    if (localStorage.getItem('useSequence') === 'true') {
      if (diceValue = this.sequence[this.diceThrow]) this.diceThrow++
      else return
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

      if (this.shownDiceValue != 1) this.points += this.shownDiceValue
      else this.points = this.previousPoints

      this.disableDice = false;
    }, 1000);
  }


  public changeTurn(): void {
    this.previousPoints = this.points
    this.snackBar.open('Turno pasado', undefined, { duration: 2000 })
    this.diceHistoric.push(0)
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
