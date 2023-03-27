import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response, NextFunction } from "express";
import authRouter from "./routes/auth";
import session from "express-session";
import MongoStore from "connect-mongo";
import createHttpError, { isHttpError } from "http-errors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 1000,
    },
    rolling: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),
  })
);

// app.get("/", (req: Request, res: Response) => {
//   res.send("Express + TypeScript Server");
// });

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.use("/api/auth", authRouter);

app.use((_, __, next: NextFunction) => {
  next(createHttpError(400, "Endpoint not found"));
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  let errMsg = "Internal Server Error";
  let statusCode = 500;

  if (isHttpError(error)) {
    statusCode = error.statusCode;
    errMsg = error.message;
  }

  res.status(statusCode).json({ error: errMsg });
});

export default app;
