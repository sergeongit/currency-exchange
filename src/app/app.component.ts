import {
    Component,
    OnInit,
} from '@angular/core'
import { ApiRateService } from './services/api-rate.service'
import { CurrencyApiData } from './interfaces/currency.interface'
import {
    BehaviorSubject,
    debounceTime,
    distinctUntilChanged,
} from 'rxjs'


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [ApiRateService],
})
export class AppComponent implements OnInit {
    // data from service
    currenciesData$ = this.currencyService.getCurrenciesData$
    currenciesList: CurrencyApiData[] = []
    popularCurrencies: CurrencyApiData[] = []
    // data from currency-control.component
    valueFromLeftInput$ = new BehaviorSubject(0)
    valueFromRightInput$ = new BehaviorSubject(0)
    valueFromLeftSelect!: number
    valueFromRightSelect!: number
    valueFromLeftInput!: number
    valueFromRightInput!: number

    readonly currencyUAH = { cc: 'UAH', rate: 1 }

    constructor(
        private currencyService: ApiRateService,
    ) {}

    ngOnInit(): void {
        this.currenciesData$
            .subscribe((currencies: CurrencyApiData[]) => {
                this.currenciesList = currencies
                this.currenciesList.unshift(this.currencyUAH)
                currencies.map(item => (item.cc === 'USD' || item.cc === 'EUR') ? this.popularCurrencies.push(item) : null)
            })

        this.valueFromLeftInput$
            .pipe(
                debounceTime(300),
                distinctUntilChanged(),
            )
            .subscribe(v => {
                this.valueFromLeftInput = v
            })

        this.valueFromRightInput$
            .pipe(
                debounceTime(300),
                distinctUntilChanged(),
            )
            .subscribe(v => {
                this.valueFromRightInput = v
            })
    }

    roundCurrency(n: string): number {
        return Number(parseFloat(n).toFixed(2))
    }

    onCurrencySelectedLeft(value: string): number {
        return this.valueFromLeftSelect = this.roundCurrency(value)
    }

    onCurrencySelectedRight(value: string): number {
        return this.valueFromRightSelect = this.roundCurrency(value)
    }

    onInputEnteredDataLeft(value: string) {
        this.valueFromLeftInput$.next(this.roundCurrency(value))
    }

    onInputEnteredDataRight(value: string) {
        this.valueFromRightInput$.next(this.roundCurrency(value))
    }
}


