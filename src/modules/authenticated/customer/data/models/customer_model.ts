import { CustomerEntity } from "../../domain/entities/customer_entity";

export class CustomerModel extends CustomerEntity {
  public static fromJson(json: any): CustomerModel {
    return new CustomerModel({
      id: json.id,
      name: json.name,
      address: json.address,
      country: json.country,
      phone_number: json.phone_number,
      job_title: json.job_title,
      status: json.status,
      created_at: json.created_at,
      updated_at: json.updated_at,
    });
  }
}
