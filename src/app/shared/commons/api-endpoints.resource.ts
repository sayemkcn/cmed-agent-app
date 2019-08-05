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


  EMPLOYEES = {
    FETCH(companyCode: string, query: string, gender: string, page: number): string {
      let url = environment.base_url + ApiEndpoints.API_VERSION + '/corporate/' + companyCode + '/employees?';
      if (query != null && query != '')
        url += 'query=' + query;
      if (gender != null && gender != '')
        url += '&gender=' + gender;
      if (page != null)
        url += '&page=' + page;
      return url;
    },

    FETCH_DETAILS(id: number, companyCode: string) {
      return environment.base_url + ApiEndpoints.API_VERSION + '/corporate/' + companyCode + '/employees/' + id;
    },

    // CREATE(companyCode: string): string {
    //   return environment.base_url + ApiEndpoints.API_VERSION + '/corporate/' + companyCode + '/employees/';
    // },

    CREATE_NEW_EMPLOYEE(companyCode: string,cmedID:number,role:string,password:string): string {
      return environment.base_url + ApiEndpoints.API_VERSION + '/corporate/' + companyCode + '/employees?company_code='+companyCode+
        "&cmed_id="+cmedID+"&role="+role+"&password="+password;

    }


  };

  STATISTICS = {
    FETCH(companyCode: string, dateFrom: string, dateTo: string): string {
      return environment.base_url + ApiEndpoints.API_VERSION + '/corporate/' + companyCode + '/stats?from=' + dateFrom + '&to=' + dateTo;
    }
  };

  MEASUREMENTS = {
    FETCH(companyCode: string, measurementType: string, dateFrom: string, dateTo: string): string {
      return environment.base_url + ApiEndpoints.API_VERSION + '/corporate/' + companyCode + '/measurementstats?measurement_type=' + measurementType + '&from=' + dateFrom + '&to=' + dateTo;
    }
  };

  BLOOD_GROUP = {
    FETCH(companyCode: string): string {
      return environment.base_url + ApiEndpoints.API_VERSION + '/corporate/' + companyCode + '/stats/blood_groups';
    }
  };


}
