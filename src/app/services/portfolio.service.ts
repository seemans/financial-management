import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private portfolios = [];

  addInvestment(investment: any) {
    this.portfolios.push(investment);
  }

  getInvestments() {
    return this.portfolios;
  }

  removeInvestment(index: number) {
    this.portfolios.splice(index, 1);
  }

  updateInvestment(index: number, updatedInvestment: any) {
    this.portfolios[index] = updatedInvestment;
  }
}
