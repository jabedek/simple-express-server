require("dotenv").config();
const express = require("express");
const cors = require("cors"); // allows to make requests from the frontend. CORS is Cross-Origin Resource Sharing. This allows frontend to contact our backend
const morgan = require("morgan"); // logger of incoming requests

const app = express();

app.use(morgan("tiny")); // tiny is a formatter
app.use(cors());

app.get("/videos", (req, res) => {
  res.json([]);
});

function notFound(req, res, next) {
  res.status(404);
  console.log("404");

  const error = new Error("Not Found");
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({ message: err.message });
}

app.use(notFound);
app.use(errorHandler);

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
