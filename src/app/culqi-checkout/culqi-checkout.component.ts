import { Component } from '@angular/core';
import { ScriptServiceService } from 'src/app/services/script-service.service';

@Component({
  selector: 'app-culqi-checkout',
  templateUrl: './culqi-checkout.component.html',
  styleUrls: ['./culqi-checkout.component.sass'],
})
export class CulqiCheckoutComponent {
  constructor(private scriptService: ScriptServiceService) {}

  ngOnInit(): void {}

  openCheckout() {
    this.scriptService.removeScript(['culqi-checkout-v4', 'culqi-js-v4']);
    this.scriptService.loadScript({
      id: 'culqi-checkout-v4',
      url: 'https://checkout.culqi.com/js/v4',
    });
    this.scriptService.loadScript({
      id: 'culqi-js-v4',
      url: 'assets/js/checkout.js',
    });
  }
}
