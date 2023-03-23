const takeScreenshot = require("./takeScreenshot");
const timeout = require("./timeout");

const navigate = async (page, recommended) => {
  for (let rec of recommended) {
    await page.goto(rec.url);

    await page.waitForSelector('[data-a-target="stream-title"]');
    rec.description = await page.evaluate(() => document.querySelector('[data-a-target="stream-title"]').innerText);

    await takeScreenshot(page, rec.name);

    await timeout(4000);
  }
};

module.exports = navigate;
