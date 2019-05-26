import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';

@Injectable()
export class ApiEndpoints {

  API_VERSION = '/api/v4';

  AGENTS = {
    FETCH: environment.base_url + this.API_VERSION + '/admin/agents',
    CREATE: environment + this.API_VERSION + '/admin/agents'
  };

}
