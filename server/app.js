const cors = require("cors");

const express = require("express");

const logger = require("morgan");

const httpStatus = require("http-status");

require("dotenv").config({ path: `${__dirname}/../.env` });

const errorHandler = require("errorhandler");

const jwt = require("jsonwebtoken");

/* Create Express Server. */
const app = express();

app.use(cors());

app.use(logger("tiny"));

/* Express Configuration. */
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Primary App Routes. */
app.get("/", (_req, res) => {
  res.status(httpStatus.OK).json({
    data: {
      message: "API endpoints for Kompost.",
    },
  });
});

/* API Route for login, register */
app.use("/v1/admin", require("./routes/v1/admin/login"));
app.use("/v1/member", require("./routes/v1/member/login"));
app.use("/v1/member", require("./routes/v1/member/signup"));

// jwt
app.use((req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers.authorization; // Express headers are auto converted to lowercase
  if (token && token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }
  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        res.status(403).json({
          success: false,
          message: "Token is not valid",
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status(403).json({
      error: "Auth Token is not supplied",
    });
  }
});

/* API endpoints for admin */
app.use("/v1/admin", require("./routes/v1/admin"));

/**
 * Error Handler. Provides full stack - remove from production
 * Morgan Logger.
 */
if (process.env.NODE_ENV !== "production") {
  app.use(errorHandler());
}

/* API endpoints for admin. */

app.use((err, _req, res, next) => {
  if (!err) {
    next();
    return;
  }

  err.statusCode &&
    res
      .status(err.statusCode || 500)
      .json({ message: err.message || "Something Went Wrong" });
});

app.all("*", (req, res) => {
  return res.status(404).json({ message: "API route not available" });
});

app.listen(app.get("port"), () => {
  // eslint-disable-next-line no-console
  console.log(`listening on *:${app.get("port")} in ${app.get("env")} mode`);
});
