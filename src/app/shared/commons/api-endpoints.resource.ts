import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';

@Injectable()
export class ApiEndpoints {

  static API_VERSION = '/api/v4';

  AGENTS = {
    FETCH: environment.base_url + ApiEndpoints.API_VERSION + '/admin/agents',
    CREATE: environment.base_url + ApiEndpoints.API_VERSION + '/admin/agents',
    FETCH_DETAILS(id: number) {
      return environment.base_url + ApiEndpoints.API_VERSION + '/admin/agents/' + id;
    },
    REFILL(agentId: number, amount: number) {
      return environment.base_url + ApiEndpoints.API_VERSION + '/admin/payment_accounts/refill?agent_id=' + agentId + '&amount=' + amount;
    }
  };

  SERVICES = {
    FETCH: environment.base_url + ApiEndpoints.API_VERSION + '/admin/services',
    CREATE: environment.base_url + ApiEndpoints.API_VERSION + '/admin/services',
    FETCH_DETAILS(id: number) {
      return environment.base_url + ApiEndpoints.API_VERSION + '/admin/services/' + id;
    },
  };

  AGENT_TYPES = {
    FETCH: environment.base_url + ApiEndpoints.API_VERSION + '/admin/agent_types',
    CREATE: environment.base_url + ApiEndpoints.API_VERSION + '/admin/agent_types',
    UPDATE: environment.base_url + ApiEndpoints.API_VERSION + '/admin/agent_types',
    FETCH_DETAILS(id: number) {
      return environment.base_url + ApiEndpoints.API_VERSION + '/admin/agent_types/' + id;
    },
  };


  USERS = {
    SEARCH(query, page) {
      return environment.base_url + ApiEndpoints.API_VERSION + '/users/search?q=' + query + '&page=' + page;
    }
  };

  // CORPORATE DASHBOARD



  EMPLOYEES ={
    FETCH: environment.base_url + ApiEndpoints.API_VERSION + '/admin/employees/',
    CREATE: environment.base_url + ApiEndpoints.API_VERSION + '/admin/employees/',
    UPDATE: environment.base_url + ApiEndpoints.API_VERSION + '/admin/employees/',
    FETCH_DETAILS (id: number) {
      return environment.base_url + ApiEndpoints.API_VERSION + '/admin/employees/' + id;
    }
  }

}
