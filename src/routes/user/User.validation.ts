import { z, ZodType } from "zod";

export class UserValidation {
  static readonly CREATE: ZodType = z.object({
    name: z.string().min(3),
    slug: z.string(),
    email: z.string().u,
  });
}
