import config from "./config";
import express from "express";
import Router from "./routes/index.routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use(Router);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
