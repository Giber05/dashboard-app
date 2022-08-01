export class CustomerActionDTO {
  message: string;
  success: boolean;

  constructor(params: { message: string; success: boolean }) {
    this.message = params.message;
    this.success = params.success;
  }

  public static fromJson(json: any): CustomerActionDTO {
    return new CustomerActionDTO({
      message: json.message,
      success: json.success,
    });
  }
}
