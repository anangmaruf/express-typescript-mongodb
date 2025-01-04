import { IUser } from "../../interfaces/User.interface";
import { UserService } from "./User.service";

export class UserRepository {
  static async insertOne(user: IUser): Promise<IUser> {
    const data = await UserService.create(user);
    return data;
  }
}
