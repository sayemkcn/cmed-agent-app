import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-agent',
  templateUrl: './create-agent.component.html',
  styleUrls: ['./create-agent.component.scss']
})
export class CreateAgentComponent implements OnInit {
  private createAgentForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    const id = new FormControl();
    const name = new FormControl();
    const designation = new FormControl();
    const description = new FormControl();
    const purchaseCommissionRate = new FormControl();
    const promoCode = new FormControl();
    const transactional = new FormControl();
    const useParentPaymentAcc = new FormControl();
    const submitButton = new FormControl();

    this.createAgentForm = new FormGroup({
      id,
      name,
      designation,
      description,
      purchase_commission_rate: purchaseCommissionRate,
      promo_code: promoCode,
      transactional,
      use_parent_payment_acc: useParentPaymentAcc,
      submit_button: submitButton
    });

  }

  createAgent(value: any) {

  }
}
