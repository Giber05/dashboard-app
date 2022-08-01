import NetworkConstant from "../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../core/utils/base_client";
import { CustomerActionDTO } from "../../models/add_customer_dto";
import { CustomerModelDTO } from "../../models/customer_model_dto";

export interface CustomerRemoteDS {
  getCustomers(token: string): Promise<CustomerModelDTO>;
  editCustomer(params: { token: string;id:number; name: string; address: string; country: string; phoneNumber: string; jobTitle: string; status: boolean }): Promise<CustomerActionDTO>;
  addCustomer(params: { token: string; name: string; address: string; country: string; phoneNumber: string; jobTitle: string; status: boolean }): Promise<CustomerActionDTO>;
  deleteCustomer(params: { token: string;  id: number }): Promise<CustomerActionDTO>;
}

export class CustomerRemoteDSImpl implements CustomerRemoteDS {
 async editCustomer(params: { token: string; id: number; name: string; address: string; country: string; phoneNumber: string; jobTitle: string; status: boolean; }): Promise<CustomerActionDTO> {
    let editCustomerURL = NetworkConstant.baseUrl + "customers";

    const response = await this.baseClient.putWithCookie({
      url: editCustomerURL,
      body: {
        id:params.id,
        name: params.name,
        address: params.address,
        country: params.country,
        status: params.status,
        job_title: params.jobTitle,
        phone_number: params.phoneNumber,
      },
      configs: {
        headers: {
          Authorization: params.token,
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return CustomerActionDTO.fromJson(body);
    }
    throw new BaseException({ message: response.data });
  }
  private baseClient = new BaseClient();

 async deleteCustomer(params: { token: string; id: number; }): Promise<CustomerActionDTO> {
     let deleteCustomerURL = NetworkConstant.baseUrl + "customers";

    const response = await this.baseClient.deleteWithCookie({
      url: deleteCustomerURL,
      configs: {
        params: {
          id: params.id,
        },
        headers: {
          Authorization: params.token,
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return CustomerActionDTO.fromJson(body);
    }
    throw new BaseException({ message: response.data });
  }

  async addCustomer(params: { token: string; name: string; address: string; country: string; phoneNumber: string; jobTitle: string; status: boolean }): Promise<CustomerActionDTO> {
    let addCustomerURL = NetworkConstant.baseUrl + "customers";

    const response = await this.baseClient.postWithCookie({
      url: addCustomerURL,
      body: {
        name: params.name,
        address: params.address,
        country: params.country,
        status: params.status,
        job_title: params.jobTitle,
        phone_number: params.phoneNumber,
      },
      configs: {
        headers: {
          Authorization: params.token,
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return CustomerActionDTO.fromJson(body);
    }
    throw new BaseException({ message: response.data });
  }

  async getCustomers(token: string): Promise<CustomerModelDTO> {
    let getCustomersURL = NetworkConstant.baseUrl + "customers";

    const response = await this.baseClient.getWithCookie({
      url: getCustomersURL,
      configs: {
        headers: {
          Authorization: token,
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return CustomerModelDTO.fromJson(body);
    }
    throw new BaseException({ message: response.data });
  }
}
