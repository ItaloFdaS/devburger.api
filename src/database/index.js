import Sequelize from "sequelize";

import mongoose from "mongoose";

import User from "../app/models/User.js";

import Product from "../app/models/Product.js";

import configDatabase from "../config/database.js";

import Category from "../app/models/Category.js";

const models = [User, Product, Category];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(configDatabase);
    models.map((model) => model.init(this.connection));
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      "mongodb://localhost:27017/devburger-postgres"
    );
  }
}

export default new Database();
