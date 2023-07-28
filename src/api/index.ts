import "../config/module-alias";
import { AppDataSource } from "@/config/data-source";
import express, { Router } from "express";

const routes = Router();

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use(
    routes.get("/", (req, res) => {
      res.send("Funcionou");
    })
  );

  return app.listen(process.env.PORT, () => {
    console.log("This server is running 🚀");
  });
});
