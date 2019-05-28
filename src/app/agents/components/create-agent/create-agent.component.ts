import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {IUserPage} from '../../../users/models/user-page.model';
import {UserService} from '../../../users/services/user.service';
import {BaseComponent} from '../../../shared/base/base.component';
import {AuthService} from '../../../auth/shared/auth.service';
import {IUser} from '../../../users/models/user.model';
import {AgentTypeService} from '../../../agenttypes/services/agent-type.service';
import {IAgentTypePage} from '../../../agenttypes/models/agenttype-page.model';
import {IAgentPage} from '../../models/agent-page.model';
import {AgentService} from '../../services/agent-service.service';

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

  constructor(private userService: UserService,
              private auth: AuthService,
              private agentTypeService: AgentTypeService,
              private agentService: AgentService) {
    super(auth);
  }

  ngOnInit() {
    this.selectedUser = null;

    this.initSearchForm();
    this.initCreateAgentForm();

    this.initAgentTypes();
    this.initAgents();
  }

  createAgent(value: any) {

  }

  selectUser(user: IUser) {
    this.selectedUser = user;
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
    const designation = new FormControl();
    const description = new FormControl();
    const purchaseCommissionRate = new FormControl();
    const promoCode = new FormControl();
    const transactional = new FormControl();
    const useParentPaymentAcc = new FormControl();

    this.createAgentForm = new FormGroup({
      id,
      name,
      designation,
      description,
      purchase_commission_rate: purchaseCommissionRate,
      promo_code: promoCode,
      transactional,
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
}
