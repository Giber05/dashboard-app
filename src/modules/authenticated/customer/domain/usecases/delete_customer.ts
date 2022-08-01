import Resource from "../../../../../core/utils/resource";
import { CustomerActionDTO } from "../../data/models/add_customer_dto";
import { CustomerRepoImpl } from "../../data/repositories_impl/customer_repo_impl";
import { CustomerRepo } from "../repositories/customer_repo";

export class DeleteCustomer {
  private customerRepo: CustomerRepo = new CustomerRepoImpl();
  async execute(params: { token: string; id: number }): Promise<Resource<CustomerActionDTO>> {
    return await this.customerRepo.deleteCustomer({ token: params.token, id: params.id });
  }
}
