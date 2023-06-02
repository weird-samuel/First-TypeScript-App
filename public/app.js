import { Invoice } from './classes/invoice.js';
//select the form
const form = document.querySelector('.new-item-form');
//select input(s)
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const invOne = new Invoice('mario', 'work on website', 250);
const invTwo = new Invoice('luigi', 'work on website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
