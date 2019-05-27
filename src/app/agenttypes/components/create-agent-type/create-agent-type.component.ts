import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {IAgentType} from '../../models/agenttype.model';
import {AgentTypeService} from '../../services/agent-type.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseComponent} from '../../../shared/base/base.component';
import {AuthService} from '../../../auth/shared/auth.service';
import {Toastr} from '../../../shared/services/toastr.service';

@Component({
  selector: 'app-create-agent-type',
  templateUrl: './create-agent-type.component.html',
  styleUrls: ['./create-agent-type.component.scss']
})
export class CreateAgentTypeComponent extends BaseComponent implements OnInit {

  private createAgentTypeForm: FormGroup;

  constructor(private agentTypeService: AgentTypeService,
              private router: Router,
              private auth: AuthService,
              private toastr: Toastr) {
    super(auth);
  }

  ngOnInit() {
    const id = new FormControl();
    const name = new FormControl();
    const description = new FormControl();
    const promoCode = new FormControl();
    this.createAgentTypeForm = new FormGroup({
      id,
      name,
      description,
      promo_code: promoCode
    });
  }

  createAgentType(value: any) {
    const agentType = value as IAgentType;
    this.agentTypeService.createAgentType(agentType)
      .subscribe(at => {
        this.toastr.success('Success!', 'Successfully created agent type: ' + at.name);
        this.router.navigate(['/agent-types']);
      }, err => this.handleError(err));
  }
}
