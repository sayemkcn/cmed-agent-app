import {Component, OnInit} from '@angular/core';
import {IAgentPage} from '../models/agent-page.model';
import {AgentService} from '../services/agent-service.service';


@Component({
  selector: 'app-agents',
  templateUrl: './agentlist.component.html',
  styleUrls: ['./agentlist.component.scss']
})
export class AgentListComponent implements OnInit {
  private agentPage: IAgentPage;

  constructor(private agentService: AgentService) {

  }

  ngOnInit(): void {
    this.agentService.getAgents().subscribe(ap => {
      this.agentPage = ap;
      console.log(ap);
    }, err => console.log(err));
  }

}
