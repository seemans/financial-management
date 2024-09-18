import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  recommendations:any = [];

  ngOnInit(): void {
    this.generateRecommendations();
  }

  generateRecommendations() {
    // Mock logic to generate portfolio recommendations
    this.recommendations = [
      'Consider increasing bond allocation based on market volatility.',
      'Review stock performance; potential for rebalancing.',
      'Increase exposure to tech stocks based on recent trends.'
    ];
  }
}
