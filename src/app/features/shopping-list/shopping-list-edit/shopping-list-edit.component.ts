import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
    @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
    @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
    @Output() ingridientAdded = new EventEmitter<Ingridient>();

    constructor() {}

    ngOnInit() {}

    onAddItem() {
        const ingName = this.nameInputRef.nativeElement.value;
        const ingAmount = this.amountInputRef.nativeElement.value;
        const newIngridient = new Ingridient(ingName, ingAmount);
        this.ingridientAdded.emit(newIngridient);
    }
}
