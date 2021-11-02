import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'card',
    template:
    `<div class="card">
    <div class="card-content">
        <div class="section underline">
            <div class="price">
                You Pay <br> <span class="big">{{ plan.price }}</span> /month
            </div>
            For 12 months + 5% VAT
        </div>

        <div class="section underline">
            <div class="plan">
                You Get <br> <span class="big">{{ plan.planName }}</span>
            </div>
        </div>

        <div class="section underline">
            <span class="big prev" *ngIf="plan.prevData"> {{ plan.prevData }} </span>
            <span class="big">{{ plan.data }}</span> National data <br>
            <span class="big prev" *ngIf="plan.prevMinutes"> {{ plan.prevMinutes }} </span>
            <span class="big">{{ plan.minutes }}</span> Flexi minutes
        </div>

        <div class="section">
            <ul class="features">
                <li *ngFor="let item of plan.features"> {{ item }}</li>
            </ul>
        </div>


        <div class="bottom">

            <div class="section overline" *ngIf="plan.limitedOffer">
                <span class="grad-bg">Limited time offer</span> <br>
                <strong>The Entertainer</strong> on us for 12 months
            </div>

            <div class="section overline">
                <div class="grid">
                    <div class="grid-item">
                        <a href="#">What you get</a>
                    </div>

                    <div class="grid-item">
                        <div class="button">Select</div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</div>`
})

export class CardComponent implements OnInit {

    @Input() plan: {
        planName: string;
        price: string;
        data: string;
        minutes: string;
        prevData: string;
        prevMinutes: string;
        features: string[];
        limitedOffer: boolean;
    }

    constructor () {
        this.plan = {
            planName: "",
            price:"",
            data:"",
            minutes:"",
            prevData:"",
            prevMinutes:"",
            features:[],
            limitedOffer:false
        }
    }

    ngOnInit(): void {

    }
}