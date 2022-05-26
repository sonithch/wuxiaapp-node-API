const fetch = require("node-fetch");
const { default: parse } = require("node-html-parser");

const getChapters = async (novelUrl) => {
  const response = await fetch(novelUrl);
  const data = await response.text();
  const html = parse(data);
  const chapterList = html.querySelectorAll(
    ".row > span:first-child > a:first-child"
  );

  const chapters = chapterList.map((ch) => ({
    url: ch.attrs.href,
    title: ch.text,
  }));

  return chapters;
};

module.exports = getChapters;
