import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-investment-details',
  templateUrl: './investment-details.component.html',
  styleUrls: ['./investment-details.component.scss']
})
export class InvestmentDetailsComponent {
  investmentForm: FormGroup;
  investments = [];

  constructor(private fb: FormBuilder, private portfolioService: PortfolioService) {
    this.investmentForm = this.fb.group({
      assetType: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      purchasePrice: ['', [Validators.required, Validators.min(0)]],
      purchaseDate: ['', Validators.required]
    });
    this.investments = this.portfolioService.getInvestments();
  }

  onSubmit() {
    if (this.investmentForm.valid) {
      this.portfolioService.addInvestment(this.investmentForm.value);
      this.investmentForm.reset();
    }
  }

  deleteInvestment(index: number) {
    this.portfolioService.removeInvestment(index);
  }

  updateInvestment(index: number) {
    const updatedData = this.investmentForm.value;
    this.portfolioService.updateInvestment(index, updatedData);
  }
}
