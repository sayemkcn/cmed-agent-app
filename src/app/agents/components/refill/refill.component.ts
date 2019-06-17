import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AgentService} from '../../services/agent-service.service';
import {IAgent} from '../../models/agent.model';
import {BaseComponent} from '../../../shared/base/base.component';
import {AuthService} from '../../../auth/shared/auth.service';
import {Toastr} from '../../../shared/services/toastr.service';

@Component({
  selector: 'app-refill',
  templateUrl: './refill.component.html',
  styleUrls: ['./refill.component.scss']
})
export class RefillComponent extends BaseComponent implements OnInit {

  refillForm: FormGroup;
  private agent: IAgent;

  constructor(private route: ActivatedRoute,
              private agentService: AgentService,
              private auth: AuthService,
              private toastr: Toastr,
              private router: Router) {
    super(auth);
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const agentId = new FormControl({value: id, disabled: true}, Validators.required);
    const amount = new FormControl({value: ''}, Validators.required);

    const agentDetails = new FormControl({value: '', disabled: true}, null);
    const balance = new FormControl({value: '', disabled: true}, null);

    this.refillForm = new FormGroup({
      agent_id: agentId, amount,
      agent_details: agentDetails,
      balance
    });

    // Load agent details
    this.loadAgentDetails(parseInt(id, 0));
  }

  refillAgent(values: any) {
    this.agentService.refillAgent(this.agent.id, values.amount)
      .subscribe(obj => {
        console.log(obj);
        this.toastr.success('Success!', 'Successfully refilled agent account');
        this.router.navigate(['/agents']);
      }, err => this.handleError(err));
  }

  private loadAgentDetails(id: number) {
    this.agentService.getAgentDetails(id)
      .subscribe(agent => {
        this.agent = agent;
        this.refillForm.controls.agent_details.setValue(agent.name + ' (' + agent.cmed_id + ')');
      }, err => this.handleError(err));
  }

  onAmountChange($event) {
    this.refillForm.controls.balance.setValue(this.calculateBalance($event.target.value));
  }

  calculateBalance(money: number) {
    if (!this.agent.purchase_commission_rate) {
      return;
    }
    return (money) / (this.agent.purchase_commission_rate);
  }
}
