import Resource from "../../../../../core/utils/resource";
import { CustomerModelDTO } from "../../data/models/customer_model_dto";
import { CustomerRepoImpl } from "../../data/repositories_impl/customer_repo_impl";
import { CustomerRepo } from "../repositories/customer_repo";

export class GetCustomers {
  private customerRepo: CustomerRepo = new CustomerRepoImpl();
  async execute(token: string): Promise<Resource<CustomerModelDTO>> {
    return await this.customerRepo.getCustomers(token);
  }
}