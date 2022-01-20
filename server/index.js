import express from "express";
import data from "./data.js";

const app = express();

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.get("/api/employees", (req, res) => {
  res.send(data.employees);
});

app.listen(5000, () => console.log("server running on port 5000"));
