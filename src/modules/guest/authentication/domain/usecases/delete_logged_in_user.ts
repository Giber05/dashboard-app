import Resource from "../../../../../core/utils/resource";
import AuthRepositoryImpl from "../../data/repositories_impl/auth_repository_impl";
import AuthRepository from "../repositories/auth_repository";

export class DeleteLoggedInUser {
  private authRepository: AuthRepository = new AuthRepositoryImpl() 
  
  async execute():Promise<Resource<boolean>> {
    return this.authRepository.deleteLoggedInUser();
  } 
}