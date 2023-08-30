import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmountFormComponent } from './amount-form/amount-form.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
{path:'income',component:AmountFormComponent},
{path:'transactions',component:TransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
