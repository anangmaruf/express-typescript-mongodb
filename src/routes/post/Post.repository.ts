import { IPost } from "../../interfaces/Post.interface";
import { PostService } from "./Post.service";

export class PostRepository {
  static async insertOne(post: IPost): Promise<IPost> {
    const data = await PostService.create(post);
    return data;
  }
}
