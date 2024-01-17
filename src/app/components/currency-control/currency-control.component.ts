import {
    AfterContentInit,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core'
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms'


@Component({
    selector: 'app-currency-control',
    templateUrl: './currency-control.component.html',
    styleUrls: ['./currency-control.component.scss'],
})
export class CurrencyControlComponent implements AfterContentInit {
    cForm!: FormGroup
    @Input() currenciesList: any
    @Input() resultInputData!: any
    @Output() selectedValue = new EventEmitter()
    @Output() fromInputData = new EventEmitter()

    constructor(
        private formBuilder: FormBuilder,
    ) { }

    ngAfterContentInit(): void {
        this.cForm = this.formBuilder.group({
            select: new FormControl('', Validators.required),
            input: new FormControl('', Validators.required)
        })
    }
}
