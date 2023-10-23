import { NgModule } from '@angular/core';
import { DiceComponent } from './dice.component';
import { AngularMaterialsModule } from 'src/app/shared/angular-materials.module';
import { DiceRoutingModule } from './dice-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        DiceComponent
    ],
    imports: [
        CommonModule,
        AngularMaterialsModule,
        DiceRoutingModule
    ],
    exports: [
        DiceComponent
    ],
})
export class DiceModule { }
