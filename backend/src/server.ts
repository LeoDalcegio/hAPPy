import cors from "cors";
import express from "express";
import "express-async-errors";
import path from "path";
import "./database/conection";
import errorHandler from "./errors/handler";
import routes from "./routes";

const PORT = 3333;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(errorHandler);

app.listen(PORT, () => console.log(`App is listening on ${PORT}`));
