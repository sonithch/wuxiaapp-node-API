const fetch = require("node-fetch");
const { default: parse } = require("node-html-parser");

const getNovels = async (query) => {
  const response = await fetch(
    `https://bestlightnovel.com/search_novels/${query}`
  );
  const data = await response.text();
  const html = parse(data);

  const novelHtml = html.querySelectorAll(".list_category > a:first-child");
  const novels = novelHtml.map((novel) => {
    const image = novel.querySelector("img");
    return {
      title: novel.attrs.title,
      link: novel.attrs.href,
      imgUrl: image.attrs.src,
    };
  });

  return novels;
};

module.exports = getNovels;
