import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { MatSelectModule } from '@angular/material/select'
import {
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms'
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar'
import { CommonModule } from '@angular/common'
import { MatInputModule } from '@angular/material/input'
import { MatDividerModule } from '@angular/material/divider'
import { MatListModule } from '@angular/material/list';
import { CurrencyControlComponent } from './components/currency-control/currency-control.component'

@NgModule({
    declarations: [
        AppComponent,
        CurrencyControlComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        HttpClientModule,
        MatSelectModule,
        FormsModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatDividerModule,
        MatListModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
