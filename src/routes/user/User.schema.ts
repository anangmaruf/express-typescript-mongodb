import { model, Schema } from "mongoose";
import { IUser } from "../../interfaces/User.interface";

const UserSchema: Schema = new Schema<IUser>({
  email: String,
  name: String,
  password: String,
});

const User = model<IUser>("User", UserSchema);

export default User;
