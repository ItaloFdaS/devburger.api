import express from "express";

import routes from "./routes.js";

import { resolve } from "node:path";

import "./database/index.js";
class App {
  constructor() {
    this.App = express();

    this.middleware();
    this.routes();
  }

  middleware() {
    this.App.use(express.json());
    this.App.use(
      "/product-file",
      express.static(resolve(__dirname, "..", "uploads"))
    );

    this.App.use(
      "/category-file",
      express.static(resolve(__dirname, "..", "uploads"))
    );
  }

  routes() {
    this.App.use(routes);
  }
}

export default new App().App;
