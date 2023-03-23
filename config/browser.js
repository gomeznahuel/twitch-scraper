const puppeteer = require("puppeteer");

const browserConfig = async () =>
  await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });

module.exports = browserConfig;
