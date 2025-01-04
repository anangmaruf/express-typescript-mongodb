import { Response, Request, Router } from "express";

const router = Router();

router.get("/", async (request: Request, response: Response) => {
  response.json({
    status: 200,
    data: "POST GET",
  });
});

export default router;
