import { Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AcceuilComponent } from './acceuil/acceuil.component';
export const routes: Routes = [
    {path : '', component: AcceuilComponent},
    {path : 'quiz', component: AcceuilComponent},
    {path : 'result', component: AcceuilComponent},
    {path : 'history', component: AcceuilComponent},
    {path : '**', component: AcceuilComponent},
];


