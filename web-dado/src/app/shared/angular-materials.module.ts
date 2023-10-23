import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';

const modules = [
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatInputModule
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
