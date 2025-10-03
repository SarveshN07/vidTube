import express from "express";
import cors from "cors";

const app = express();
// common middelwares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

app.use(express.static("public"));
//common middelwares over ;

// import routes
import healthCheckRouter from "./routes/healthCheck.routes.js";

// routes
app.use("/api/v1/healthcheck", healthCheckRouter);

export { app };
