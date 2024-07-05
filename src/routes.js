import { Router } from "express";

const routes = new Router();

routes.get("/", (resquest, response) => {
  return response.status(200).json({ message: "Galo DOido" });
});

export default routes;
