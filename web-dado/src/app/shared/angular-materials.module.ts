import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const modules = [
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
]


@NgModule({
    imports: [
        ...modules
    ],
    exports: [
        ...modules
    ]
})
export class AngularMaterialsModule { }
