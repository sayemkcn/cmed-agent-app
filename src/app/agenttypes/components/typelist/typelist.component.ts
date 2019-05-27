import {Component, OnInit} from '@angular/core';
import {IAgentTypePage} from '../../models/agenttype-page.model';
import {AgentTypeService} from '../../services/agent-type.service';
import {BaseComponent} from '../../../shared/base/base.component';
import {AuthService} from '../../../auth/shared/auth.service';

@Component({
  selector: 'app-typelist',
  templateUrl: './typelist.component.html',
  styleUrls: ['./typelist.component.scss']
})
export class TypeListComponent extends BaseComponent implements OnInit {

  private agentTypePage: IAgentTypePage;

  constructor(private typeService: AgentTypeService, private auth: AuthService) {
    super(auth);
  }

  ngOnInit() {
    this.typeService.getAgentTypes().subscribe(
      typePage => this.agentTypePage = typePage,
      err => this.handleError(err)
    );
  }

}
