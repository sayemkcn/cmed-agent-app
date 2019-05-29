export interface ICmedService {
  id: number;
  name: string;
  code: string;
  description: string;
  cost: number;
  created_at: Date;
  updated_at: Date;
  image_url: string;
  service_type_id: number;
}
