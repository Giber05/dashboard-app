import NetworkConstant from "../../../../../../core/constants/network_constant";
import BaseException from "../../../../../../core/error/base_exception";
import BaseClient from "../../../../../../core/utils/base_client";
import { UserModel } from "../../models/user_model";

export interface AuthRemoteDS {
  login(params: { email: string; password: string; role: string }): Promise<UserModel>;
  logout(currentToken: string): Promise<boolean>;
}

class AuthRemoteDSImpl implements AuthRemoteDS {
  private baseClient = new BaseClient();

  async logout(currentToken: string): Promise<boolean> {
    let logoutURL = NetworkConstant.baseUrl + "auth/logout";
    const response = await this.baseClient.postWithCookie({
      url: logoutURL,
      configs: {
        headers: {
          Authorization: "Bearer " + currentToken,
        },
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = response.data;
      return body.success;
    }
    throw new BaseException({ message: response.data.error });
  }

  public async login(params: { email: string; password: string; role: string }): Promise<UserModel> {
    let loginURL = `${NetworkConstant.baseUrl}auth/login`;
    const response = await this.baseClient.postWithoutCookie({
      url: loginURL,
      body: {
        email: params.email,
        password: params.password,
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = JSON.stringify(response.data);

      return UserModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }
  public async loginAdmin(params: { username: string; password: string; role: string }): Promise<UserModel> {
    let loginURL = `${NetworkConstant.baseUrl}auth/login?role=${params.role}`;
    const response = await this.baseClient.postWithoutCookie({
      url: loginURL,
      body: {
        username: params.username,
        password: params.password,
      },
    });

    if (response.status >= 200 && response.status <= 210) {
      const body = JSON.stringify(response.data);

      return UserModel.fromJson(body);
    }
    throw new BaseException({ message: response.data.error });
  }
}
export default AuthRemoteDSImpl;
