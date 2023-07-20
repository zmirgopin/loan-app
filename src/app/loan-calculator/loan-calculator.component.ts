import { Component } from '@angular/core';

@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.css']
})
export class LoanCalculatorComponent {
  loanAmount: number | null = null;
  interestRate: number | null = null;
  loanTerm: number | null = null;
  monthlyPayment: number | null = null;
  totalInterest: number | null = null;

  calculateLoan(): void {
    if (this.loanAmount && this.interestRate && this.loanTerm) {
      const principle = this.loanAmount;
      const ratePerPeriod = this.interestRate / 12 / 100;
      const numPayments = this.loanTerm * 12;

      const numerator = principle * (ratePerPeriod * Math.pow(1 + ratePerPeriod, numPayments));
      const denominator = Math.pow(1 + ratePerPeriod, numPayments) - 1;

      this.monthlyPayment = numerator / denominator;
      this.totalInterest = this.monthlyPayment * numPayments - principle;
    }
  }
}

