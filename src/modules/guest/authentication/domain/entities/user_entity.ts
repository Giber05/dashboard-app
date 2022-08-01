export class UserEntity {
  accessToken: string;
  expiredIn: number;
  loggedInAt: number;

  constructor(params: { accessToken: string; expiredIn: number; loggedInAt: number }) {
    this.accessToken = params.accessToken;
    this.expiredIn = params.expiredIn;
    this.loggedInAt = params.loggedInAt;
  }
}
