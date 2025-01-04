import { IPost } from "../../interfaces/Post.interface";
import { Validation } from "../../validation";
import Post from "./Post.schema";
import { PostValidation } from "./Post.validation";

export class PostService {
  static async create(request: IPost): Promise<IPost> {
    const postRequest = Validation.validate(PostValidation.CREATE, request);
    const data = await new Post(postRequest);
    data.save();

    return data;
  }
}
