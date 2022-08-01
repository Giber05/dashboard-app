export class CustomerEntity {
  id: number;
  name: string;
  address: string;
  country: string;
  phone_number: string;
  job_title: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;

  constructor(params: { id: number; name: string; address: string; country: string; phone_number: string; job_title: string; status: boolean; created_at: Date; updated_at: Date }) {
    this.id = params.id;
    this.name = params.name;
    this.address = params.address;
    this.country = params.country;
    this.phone_number = params.phone_number;
    this.job_title = params.job_title;
    this.status = params.status;
    this.created_at = params.created_at;
    this.updated_at = params.updated_at;
  }
}
