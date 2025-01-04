import { z, ZodType } from "zod";

// title: string;
// slug: string;
// description: string;
// tags: string[];
// components: object[];
// createdAt: string;
// updatedAt: string;
// deletedAt: string;
export class PostValidation {
  static readonly CREATE: ZodType = z.object({
    title: z.string().min(2),
    slug: z.string().min(2),
    // description: z.string().optional(),
    // tags: z.string().array().optional(),
  });
}
