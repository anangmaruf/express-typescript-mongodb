import { model, Schema } from "mongoose";
import {IPost} from "../../interfaces/Post.interface";

const PostSchema: Schema = new Schema<IPost>({
  title: String,
  slug: String,
});

const Post = model<IPost>("Post", PostSchema);

export default Post;
