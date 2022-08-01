import Resource from "../../../../../core/utils/resource";
import {  CustomerActionDTO } from "../../data/models/add_customer_dto";
import { CustomerRepoImpl } from "../../data/repositories_impl/customer_repo_impl";
import { CustomerRepo } from "../repositories/customer_repo";

export class AddCustomer {
  private customerRepo: CustomerRepo = new CustomerRepoImpl();
  async execute(params: { token: string; name: string; address: string; country: string; phoneNumber: string; jobTitle: string; status: boolean }): Promise<Resource<CustomerActionDTO>> {
    return await this.customerRepo.addCustomer({ token: params.token, name: params.name, address: params.address, country: params.country, status: params.status, jobTitle: params.jobTitle, phoneNumber: params.phoneNumber });
  }
}
