import express from "express";

import routes from "./routes";

class App {
  constructor() {
    this.App = express();

    this.middleware();
    this.routes();
  }

  middleware() {
    this.App.use(express.json());
  }

  routes() {
    this.App.use(routes);
  }
}

export default new App().app;
