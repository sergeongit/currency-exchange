import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { CurrencyApiData } from '../interfaces/currency.interface'

@Injectable({
    providedIn: 'root',
})
export class ApiRateService {
    apiUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'

    constructor(
        private http: HttpClient,
    ) {}

    getCurrenciesData$ = this.http.get<CurrencyApiData[]>(this.apiUrl).pipe(
        map((currency: CurrencyApiData[]) => {
            return currency.map(item => ({
                cc: item.cc,
                rate: item.rate,
            }))
        }),
    )
}
