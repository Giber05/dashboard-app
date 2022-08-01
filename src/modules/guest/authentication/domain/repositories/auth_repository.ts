import Resource from "../../../../../core/utils/resource";
import { UserModel } from "../../data/models/user_model";

interface AuthRepository {
  login(params: { email: string; password: string, role:string }): Promise<Resource<UserModel>>;
  logout(currentToken:string): Promise<Resource<boolean>>;
  getCurrentUser(): Promise<Resource<UserModel>>;
  deleteLoggedInUser(): Promise<Resource<boolean>>;
}

export default AuthRepository;
