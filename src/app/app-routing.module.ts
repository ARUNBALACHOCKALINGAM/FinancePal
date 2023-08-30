import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmountFormComponent } from './amount-form/amount-form.component';

const routes: Routes = [
{path:'income',component:AmountFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
