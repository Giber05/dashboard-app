import { CustomerModel } from "./customer_model";

export class CustomerModelDTO {
  message: string;
  success: boolean;
  data: CustomerModel[];

  constructor(params: { message: string; success: boolean; data: CustomerModel[] }) {
    this.message = params.message;
    this.success = params.success;
    this.data = params.data;
  }

  public static fromJson(json: any): CustomerModelDTO {
    return new CustomerModelDTO({
      message: json.message,
      success: json.success,
      data: json.data.map((customer: CustomerModel) => CustomerModel.fromJson(customer)),
    });
  }
}