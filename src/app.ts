import { Invoice } from './classes/invoice.js'
import { ListTmplate } from './classes/listTemplate.js';
import { Payment } from './classes/payments.js'
import { HasFormatter } from "./interfaces/HasFormatter.js";

//select the form
const form = document.querySelector('.new-item-form') as HTMLFormElement;

//select input(s)
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTmplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    };

    list.render(doc, type.value, 'end');
});
