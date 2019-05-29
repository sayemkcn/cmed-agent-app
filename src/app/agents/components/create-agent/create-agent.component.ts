import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {IUserPage} from '../../../users/models/user-page.model';
import {UserService} from '../../../users/services/user.service';
import {BaseComponent} from '../../../shared/base/base.component';
import {AuthService} from '../../../auth/shared/auth.service';
import {IUser} from '../../../users/models/user.model';
import {AgentTypeService} from '../../../agenttypes/services/agent-type.service';
import {IAgentTypePage} from '../../../agenttypes/models/agenttype-page.model';
import {IAgentPage} from '../../models/agent-page.model';
import {AgentService} from '../../services/agent-service.service';
import {IAgent} from '../../models/agent.model';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {THIS_EXPR} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-create-agent',
  templateUrl: './create-agent.component.html',
  styleUrls: ['./create-agent.component.scss']
})
export class CreateAgentComponent extends BaseComponent implements OnInit {
  private createAgentForm: FormGroup;
  private searchForm: FormGroup;

  private userPage: IUserPage;
  private selectedUser: IUser;

  private agentTypePage: IAgentTypePage;
  private agentPage: IAgentPage;

  private edit: boolean;
  private exAgent: IAgent;

  constructor(private userService: UserService,
              private auth: AuthService,
              private agentTypeService: AgentTypeService,
              private agentService: AgentService,
              private toastr: ToastrService,
              private router: Router,
              private route: ActivatedRoute) {
    super(auth);
  }

  ngOnInit() {
    this.selectedUser = null;

    this.initSearchForm();
    this.initCreateAgentForm();

    this.initAgentTypes();
    this.initAgents();

    // for edit agent
    const paramId: string = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      this.edit = true;
      this.populateCreateAgentForm(parseInt(paramId, 0));
    }

  }

  createAgent(value: any) {
    const agent = value as IAgent;
    agent.user_id = this.exAgent ? this.exAgent.user_id : this.selectedUser.id;
    console.log(agent);
    this.agentService.createAgents(agent)
      .subscribe(a => {
        this.toastr.success('Successfully created agent: ' + a.name + ' for cmed id: ' + a.cmed_id);
        this.router.navigate(['/agents']);
      }, err => this.handleError(err));
  }

  selectUser(user: IUser) {
    this.selectedUser = user;
    this.createAgentForm.controls.name.setValue(user.name);
  }

  onChangeSearch($event: any) {
    console.log($event.target.value);
    this.userService.searchUsers($event.target.value, 0)
      .subscribe((up: IUserPage) => {
        console.log(up);
        this.userPage = up;
      }, err => this.handleError(err));
  }


  private initCreateAgentForm() {
    const id = new FormControl();
    const name = new FormControl();
    const cmedId = new FormControl({value: '', disabled: true}, Validators.required);
    const designation = new FormControl();
    const description = new FormControl();
    const purchaseCommissionRate = new FormControl();
    const promoCode = new FormControl();
    const transactional = new FormControl();
    const agentTypeId = new FormControl();
    const parentId = new FormControl();
    const useParentPaymentAcc = new FormControl();

    this.createAgentForm = new FormGroup({
      id,
      name,
      cmed_id: cmedId,
      designation,
      description,
      purchase_commission_rate: purchaseCommissionRate,
      promo_code: promoCode,
      transactional,
      agent_type_id: agentTypeId,
      parent_id: parentId,
      use_parent_payment_acc: useParentPaymentAcc
    });
  }

  private initSearchForm() {
    const search = new FormControl();
    this.searchForm = new FormGroup({
      search
    });
  }

  clearUserSelection() {
    this.selectedUser = null;
  }

  private initAgentTypes() {
    this.agentTypeService.getAgentTypes()
      .subscribe(at => this.agentTypePage = at, err => this.handleError(err));

  }

  private initAgents() {
    this.agentService.getAgents()
      .subscribe(ap => this.agentPage = ap, err => this.handleError(err));
  }

  private populateCreateAgentForm(paramId: number) {
    this.agentService.getAgentDetails(paramId)
      .subscribe(exAgent => {
        console.log(exAgent);
        this.exAgent = exAgent;
        this.createAgentForm.controls.cmed_id.setValue(exAgent.cmed_id);
        this.createAgentForm.controls.id.setValue(exAgent.id);
        this.createAgentForm.controls.name.setValue(exAgent.name);
        this.createAgentForm.controls.designation.setValue(exAgent.designation);
        this.createAgentForm.controls.description.setValue(exAgent.description);
        this.createAgentForm.controls.purchase_commission_rate.setValue(exAgent.purchase_commission_rate);
        this.createAgentForm.controls.promo_code.setValue(exAgent.promo_code);
        this.createAgentForm.controls.agent_type_id.setValue(exAgent.agent_type_id);

        this.createAgentForm.controls.transactional.setValue(exAgent.transactional);
        this.createAgentForm.controls.parent_id.setValue(exAgent.parent_id);
        this.createAgentForm.controls.use_parent_payment_acc.setValue(exAgent.use_parent_payment_acc);

        // disable edit
        this.createAgentForm.controls.transactional.disable({onlySelf: true, emitEvent: false});
        this.createAgentForm.controls.parent_id.disable({onlySelf: true, emitEvent: false});
        this.createAgentForm.controls.use_parent_payment_acc.disable({onlySelf: true, emitEvent: false});

      }, err => this.handleError(err));
  }

  showCreateAgentForm(): boolean {
    if (this.selectedUser) {
      return true;
    }
    if (this.edit) {
      return true;
    }
    return false;
  }

}
