import {Component, OnInit} from '@angular/core';
import {IAgentPage} from '../../models/agent-page.model';
import {AgentService} from '../../services/agent-service.service';
import {AuthService} from '../../../auth/shared/auth.service';
import {BaseComponent} from '../../../shared/base/base.component';


@Component({
  selector: 'app-agents',
  templateUrl: './agentlist.component.html',
  styleUrls: ['./agentlist.component.scss']
})
export class AgentListComponent extends BaseComponent implements OnInit {
  private agentPage: IAgentPage;

  constructor(private agentService: AgentService, private auth: AuthService) {
    super(auth);
  }

  ngOnInit(): void {
    this.agentService.getAgents().subscribe(ap => {
      this.agentPage = ap;
    }, err => this.handleError(err));
  }


}
