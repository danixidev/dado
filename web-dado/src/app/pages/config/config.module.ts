import { NgModule } from '@angular/core';
import { AngularMaterialsModule } from 'src/app/shared/angular-materials.module';
import { ConfigComponent } from './config.component';
import { ConfigRoutingModule } from './config-routing.module';

@NgModule({
    declarations: [
        ConfigComponent
    ],
    imports: [
        AngularMaterialsModule,
        ConfigRoutingModule
    ],
    exports: [
        ConfigComponent
    ],
})
export class ConfigModule { }
