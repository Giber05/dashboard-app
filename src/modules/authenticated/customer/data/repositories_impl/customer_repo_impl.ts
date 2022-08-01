import BaseRepository from "../../../../../core/utils/base_repository";
import Resource from "../../../../../core/utils/resource";
import { CustomerRepo } from "../../domain/repositories/customer_repo";
import { CustomerRemoteDS, CustomerRemoteDSImpl } from "../datasources/remote/customer_remote_ds";
import { CustomerActionDTO } from "../models/add_customer_dto";
import { CustomerModelDTO } from "../models/customer_model_dto";

export class CustomerRepoImpl extends BaseRepository implements CustomerRepo {
  private customerRemoteDS: CustomerRemoteDS = new CustomerRemoteDSImpl();
  
  editCustomer(params: { token: string; id: number; name: string; address: string; country: string; phoneNumber: string; jobTitle: string; status: boolean; }): Promise<Resource<CustomerActionDTO>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.customerRemoteDS.editCustomer({
          id:params.id,
          token: params.token,
          name: params.name,
          address: params.address,
          country: params.country,
          status: params.status,
          jobTitle: params.jobTitle,
          phoneNumber: params.phoneNumber,
        });
        if (resource instanceof CustomerActionDTO) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }
  deleteCustomer(params: { token: string; id: number }): Promise<Resource<CustomerActionDTO>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.customerRemoteDS.deleteCustomer({
          token: params.token,
          id: params.id,
        });
        if (resource instanceof CustomerActionDTO) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }

  addCustomer(params: { token: string; name: string; address: string; country: string; phoneNumber: string; jobTitle: string; status: boolean }): Promise<Resource<CustomerActionDTO>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.customerRemoteDS.addCustomer({
          token: params.token,
          name: params.name,
          address: params.address,
          country: params.country,
          status: params.status,
          jobTitle: params.jobTitle,
          phoneNumber: params.phoneNumber,
        });
        if (resource instanceof CustomerActionDTO) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }

  // deleteUser(params: { token: string; role: string; id: number; }): Promise<Resource<DeleteModel>> {
  //   return this.networkOnlyCall({
  //     networkCall: async () => {
  //       const resource = await this.customerRemoteDS.deleteUser({
  //         token:params.token,
  //         role:params.role,
  //         id:params.id,

  //       });
  //       if (resource instanceof DeleteModel) return Resource.success({ data: resource });
  //       return Resource.error({ exception: resource});
  //     },
  // });
  // }
  getCustomers(token: string): Promise<Resource<CustomerModelDTO>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource = await this.customerRemoteDS.getCustomers(token);
        if (resource instanceof CustomerModelDTO) return Resource.success({ data: resource });
        return Resource.error({ exception: resource });
      },
    });
  }
}
