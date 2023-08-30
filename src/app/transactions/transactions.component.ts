import { Component } from '@angular/core';

interface Transaction {
  date: Date;
  transaction: string;
  amount: string;
}

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  transactions: Transaction[] = [];
  newTransaction: Transaction = { date: new Date(), transaction: '', amount: '' };

  addTransaction() {
    // Assuming you want to prevent empty transactions from being added
    if (this.newTransaction.transaction && this.newTransaction.amount !== '0') {
      this.transactions.push({ ...this.newTransaction });
      this.newTransaction = { date: new Date(), transaction: '', amount: '' };
    }
  }
}
