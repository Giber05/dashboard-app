import { UserEntity } from "../../domain/entities/user_entity";

export class UserModel extends UserEntity {
  public static fromJson(json: any): UserModel {
    const object = JSON.parse(json);

    return new UserModel({
      accessToken: object.access_token,
      expiredIn: object.expires_in,
      loggedInAt: new Date().getTime() + object.expires_in * 1000,
    });
  }
  public static fromLocalJson(json: any): UserModel {
    const object = JSON.parse(json);

    return new UserModel({
      accessToken: object.accessToken,
      expiredIn: object.expiredIn,
      loggedInAt: object.loggedInAt,
    });
  }
  public toJson(): string {
    return JSON.stringify({
      accessToken: this.accessToken,
      expiredIn: this.expiredIn,
      loggedInAt: this.loggedInAt,
    });
  }
}
