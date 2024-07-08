import { Router } from "express";

import { v4 } from "uuid";

import User from "./app/models/User.js";

const routes = new Router();

routes.get("/", async (resquest, response) => {
  const user = await User.create({
    id: v4(),
    name: "italofelipe",
    email: "italofelipe@email.com",
    password_hash: "GaloDoido",
  });

  return response.status(201).json({ user });
});

export default routes;
