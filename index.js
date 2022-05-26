const express = require("express");
const getChapters = require("./getChapters");
const getNovels = require("./getNovels");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("This is wuxiaApp API!");
});

app.get("/novels", async (req, res) => {
  const data = await getNovels(req.query.query);
  res.send(data);
});

app.get("/chapters", async (req, res) => {
  const data = await getChapters(req.query.novelUrl);
  res.send(data);
  //res.send(req.query.novelUrl);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
