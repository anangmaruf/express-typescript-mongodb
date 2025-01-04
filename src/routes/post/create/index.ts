import { NextFunction, Request, Response, Router } from "express";
import Post from "../Post.schema";
import { PostRepository } from "../Post.repository";

const router = Router();

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await PostRepository.insertOne(req.body);
    res.status(200).json({
      status: 200,
      data: response,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
