import { env } from "@user-desk/env/backend";
import cors from "cors";
import express, { type Application } from "express";

const app: Application = express();

app.use(
  cors({
    origin: env.CORS_ORIGIN,
    methods: ["GET", "PATCH"],
  }),
);

app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).send("Server is running!");
});

app.listen(env.PORT, () => {
  console.log(`Server is running on http://localhost: ${env.PORT}`);
});
