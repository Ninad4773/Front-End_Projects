import { Component } from '@angular/core';
import { CurrencyService } from './Service/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private currencyService: CurrencyService) {}

  selectedCurrency: string = 'INR';

  sendCurrency(event: string) {
    console.log(event);
    this.currencyService.setCurrency(event);
  }
}
