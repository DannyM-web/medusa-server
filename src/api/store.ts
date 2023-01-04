import { Product, ProductService } from "@medusajs/medusa";
import { Router, Request, Response } from "express";

export default (router: Router) => {
  router.get("/store/test", async (req: Request, res: Response) => {
    try {
      const productService: ProductService =
        req.scope.resolve("productService");
      const products = await productService.list(
        {},
        { relations: ["variants"] }
      );

      res.json(products);

      console.log(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
};
