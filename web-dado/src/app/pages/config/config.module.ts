import { NgModule } from '@angular/core';
import { AngularMaterialsModule } from 'src/app/shared/angular-materials.module';
import { ConfigComponent } from './config.component';
import { ConfigRoutingModule } from './config-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ConfigComponent
    ],
    imports: [
        AngularMaterialsModule,
        ConfigRoutingModule,
        FormsModule
    ],
    exports: [
        ConfigComponent
    ],
})
export class ConfigModule { }
