import Resource from "../../../../../core/utils/resource";
import {  CustomerActionDTO } from "../../data/models/add_customer_dto";
import { CustomerModelDTO } from "../../data/models/customer_model_dto";

export interface CustomerRepo {
  getCustomers(token: string): Promise<Resource<CustomerModelDTO>>;
  addCustomer(params: { token: string; name: string; address: string; country: string; phoneNumber: string; jobTitle: string; status: boolean }): Promise<Resource<CustomerActionDTO>>;
  deleteCustomer(params: { token: string;  id: number }): Promise<Resource<CustomerActionDTO>>;
  editCustomer(params: { token: string; id:number; name: string; address: string; country: string; phoneNumber: string; jobTitle: string; status: boolean }): Promise<Resource<CustomerActionDTO>>;


}