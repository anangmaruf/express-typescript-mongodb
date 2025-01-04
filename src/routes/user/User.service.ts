import { IUser } from "../../interfaces/User.interface";
import { Validation } from "../../validation";
import User from "./User.schema";
import { UserValidation } from "./User.validation";

export class UserService {
  static async create(request: IUser): Promise<IUser> {
    const userRequest = Validation.validate(UserValidation.CREATE, request);
    const data = await new User(userRequest);
    data.save();

    return data;
  }
}
