const express = require("express");
const getNovels = require("./getNovels");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/test", (req, res) => {
  res.send("Hello Test!");
});

app.get("/novels", async (req, res) => {
  const data = await getNovels(req.query.query);
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
