import {ICmedService} from '../../cmedservices/models/cmedservice.model';

export interface IAgent {
  id: number;
  name: string;
  user_id: number;
  cmed_id: string;
  company: string;
  designation: string;
  description: string;
  promo_code: string;
  path: string;
  transactional: boolean;
  use_parent_payment_acc: boolean;
  agent_type_id: number;
  parent_id: number;
  created_at: Date;
  updated_at: Date;
  purchase_commission_rate: number;
  available_services: ICmedService[];
}
