import { Router } from "express";
import storeRoute from "./store";
import cors from "cors";
import { projectConfig } from "../../medusa-config";
export default (_rootDirectory, _pluginOptions) => {
  const router = Router();
  const storeCorsOptions = {
    origin: projectConfig.store_cors.split(","),
    credentials: true,
  };
  // router.options("*", cors(storeCorsOptions));
  storeRoute(router);

  return router;
};
