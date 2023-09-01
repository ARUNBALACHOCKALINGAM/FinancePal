import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-amount-form',
  templateUrl: './amount-form.component.html',
  styleUrls: ['./amount-form.component.css']
})
export class AmountFormComponent {
  AddIncome (form:NgForm){
    if(form.valid){
      console.log(form.value.salary);
      form.reset();
      alert("form submitted!")
//add the logic to push into db.json?
    }
    else{
      alert("Please fill all the fields")
    }

  }


  
  salary: number = 0;
  otherincome: number = 0;

  calculateProgress(): number {
    if (this.salary === 0 && this.otherincome === 0) {
      return 0; // To avoid division by zero
    }
    return (this.salary / (this.salary + this.otherincome)) * 100;
  }

  calculateOtherIncomeProgress(): number {
    if (this.salary === 0 && this.otherincome === 0) {
      return 0; // To avoid division by zero
    }
    return (this.otherincome / (this.salary + this.otherincome)) * 100;
  }

}