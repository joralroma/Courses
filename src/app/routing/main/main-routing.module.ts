import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes propios
import { IndexComponent } from '../../components/main/index/index.component';



const APP_ROUTES: Routes = [
  { path: '', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
