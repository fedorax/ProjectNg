import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListModule } from './../Shared/list/list.module';

import { HomeRoutes } from './home.route';
import { HomeComponent } from './home.component';


@NgModule({
    imports: [
        ListModule,
        RouterModule.forChild(HomeRoutes)
        ],
    exports: [ ],
    declarations: [
        HomeComponent
        ],
    providers: [],
})
export class HomeModule { }
