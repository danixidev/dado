import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  public useSequence: boolean = false;
  public data: string = '';

  constructor(
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.useSequence = localStorage.getItem('useSequence') === 'true';
    this.data = localStorage.getItem('data') || '';
  }

  public slideChange(): void {
    localStorage.setItem('useSequence', this.useSequence.toString());
  }

  public uploadData(): void {
    try {
      const data = JSON.parse(this.data);
      console.log(data);
      if (typeof data == "object") {
        localStorage.setItem('data', JSON.stringify(data));
        this.snackBar.open("Secuencia guardada correctamente", undefined, { duration: 2000 })
      } else {
        this.snackBar.open("Error con el formato de los datos. El formato debe ser numeros del 1 al 6, separados por comas y contenidos entre corchetes (ejemplo: [1,3,5,6])", undefined, { duration: 5000 })
      }
    } catch (error) {
      this.snackBar.open("Error con el formato de los datos. El formato debe ser numeros del 1 al 6, separados por comas y contenidos entre corchetes (ejemplo: [1,3,5,6])", undefined, { duration: 5000 })
    }
  }

  public resetData(): void {
    if (confirm("¿Está seguro de que desea borrar la secuencia guardada?")) {
      localStorage.removeItem('data');
      this.data = '';
    }
  }
}
