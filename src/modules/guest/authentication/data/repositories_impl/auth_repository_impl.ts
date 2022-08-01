import { message } from "antd";
import Password from "antd/lib/input/Password";
import { useDispatch, useSelector } from "react-redux";
import BaseException from "../../../../../core/error/base_exception";
import BaseRepository from "../../../../../core/utils/base_repository";
import Resource from "../../../../../core/utils/resource";
import AuthRepository from "../../domain/repositories/auth_repository";
import { selectAuth } from "../../presentation/reducers/auth_reducer";
import AuthLocalDSImpl, { AuthLocalDS } from "../datasources/local/auth_local_ds";
import AuthRemoteDSImpl, { AuthRemoteDS } from "../datasources/remote/auth_remote_ds";
import { UserModel } from "../models/user_model";

class AuthRepositoryImpl extends BaseRepository implements AuthRepository {
  private authRemoteDS: AuthRemoteDS = new AuthRemoteDSImpl();
  private authLocalDS: AuthLocalDS = new AuthLocalDSImpl();

  deleteLoggedInUser(): Promise<Resource<boolean>> {
    return this.cacheOnlyCall({
      cacheCall: async () => {
        await this.authLocalDS.deleteLoggedInUser();
        const resource = await this.authLocalDS.deleteLoggedInUser();
        await localStorage.removeItem("init-url");
        if (resource) return Resource.success({ data: resource });
        return Resource.error({ exception: new BaseException({ message: "Unauthorized" }) });
      },
    });
  }

  login(params: { email: string; password: string; role: string }): Promise<Resource<UserModel>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        const resource: UserModel = await this.authRemoteDS.login({ email: params.email, password: params.password, role: params.role });
        if (resource instanceof UserModel) {
          this.authLocalDS.saveUser(resource);
          return Resource.success({ data: resource });
        }
        return Resource.error({ exception: resource });
      },
    });
  }

  logout(currentToken: string): Promise<Resource<boolean>> {
    return this.networkOnlyCall({
      networkCall: async () => {
        await this.authLocalDS.deleteLoggedInUser();
        // const resource = await this.authRemoteDS.logout(currentToken);
        await localStorage.removeItem("init-url");
        return Resource.success({ data: true });
        // return Resource.error({ exception: new BaseException({ message: "Unauthorized" }) });
      },
    });
  }

  getCurrentUser(): Promise<Resource<UserModel>> {
    return this.cacheOnlyCall({
      cacheCall: async () => {
        const resource: UserModel | null = await this.authLocalDS.getUser();
        if (resource instanceof UserModel) {
          this.authLocalDS.saveUser(resource);
          return Resource.success({ data: resource });
        }
        return Resource.error({ exception: new BaseException({ message: "No Data" }) });
      },
    });
  }
}

export default AuthRepositoryImpl;
