import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'masar-cards';

  plans = [
    {
        planName: 'Power Plan 125',
        price: 'AED 125',
        prevData: '',
        data: '4 GB',
        prevMinutes: '',
        minutes: '100',
        features:['No activation fee. Save AED 125',
        '4 GB free data on WiFi UAE'],
        limitedOffer: false
    },
    {
        planName: 'Power Plan 200',
        price: 'AED 200',
        prevData: '13',
        data: '26 GB',
        prevMinutes: '',
        minutes: '400',
        features:['No activation fee. Save AED 125',
        '15 GB free data on WiFi UAE',
        'Carry over data to next month'],
        limitedOffer: true
    },
    {
        planName: 'Power Plan 300',
        price: 'AED 300',
        prevData: '25',
        data: '50 GB',
        prevMinutes: '',
        minutes: '1020',
        features:['No activation fee. Save AED 125',
        '25 GB free data on WiFi UAE',
        'Carry over data to next month',
        'Amazon Prime on us',
        'Free Internet Calling Pack'],
        limitedOffer: true
    },
    {
        planName: 'Power Plan 500',
        price: 'AED 500',
        prevData: '50',
        data: '100 GB',
        prevMinutes: '',
        minutes: '1500',
        features:['No activation fee. Save AED 125',
        '100 GB free data on WiFi UAE',
        'Carry over data to next month',
        'Amazon Prime on us',
        'Free Internet Calling Pack',
        'Roaming 2 GB'],
        limitedOffer: true
    },
    {
        planName: 'Power Plan 1000',
        price: 'AED 1000',
        prevData: '120',
        data: 'Unlimited',
        prevMinutes: '2500',
        minutes: 'Unlimited',
        features:['No activation fee. Save AED 125',
        '120 GB free data on WiFi UAE',
        'Carry over data to next month',
        'Amazon Prime on us',
        'Free Internet Calling Pack',
        'Roaming 5 GB'],
        limitedOffer: true
    }
  ];
}
