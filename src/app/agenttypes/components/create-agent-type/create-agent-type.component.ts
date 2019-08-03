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

  createAgentTypeForm: FormGroup;

  constructor(private agentTypeService: AgentTypeService,
              private router: Router,
              private route: ActivatedRoute,
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
      id : id,
      name:  name,
      description: description,
      promo_code: promoCode
    });

    // pre-populate fields for edit
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      console.log(paramId);
      this.agentTypeService.getAgentType(parseInt(paramId, 0))
        .subscribe(agentType => {
          id.setValue(agentType.id);
          name.setValue(agentType.name);
          description.setValue(agentType.description);
          promoCode.setValue(agentType.promo_code);
        }, err => this.handleError(err));
    }
  }

  createAgentType(value: any) {
    const agentType = value as IAgentType;
    console.log(agentType);
    this.agentTypeService.createAgentType(agentType)
      .subscribe(at => {
        this.toastr.success('Success!', 'Successfully created agent type: ' + at.name);
        this.router.navigate(['/agent-types']);
      }, err => this.handleError(err));
  }
}
