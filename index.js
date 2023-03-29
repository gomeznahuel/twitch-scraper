require("dotenv").config()
const { browserConfig } = require("./config");
const { saveData } = require("./fs");
const { getRecommended, navigate } = require("./utils");
const sendMessage = require("./utils/telegram_bot");

(async () => {
  // Browser config
  const browser = await browserConfig();

  // New page
  const page = await browser.newPage();

  // Go to twitch
  await page.goto(process.env.URL);

  // Wait for selector and get recommended channels.
  await page.waitForSelector(process.env.SELECTOR);

  // Get recommended channels
  const recommended = await page.evaluate(getRecommended);

  // Navigate to each recommended channel.
  await navigate(page, recommended);

  // Save data to json file in data folder.
  await saveData(recommended, "recommended");

  // Send json data to telegram bot.
  await sendMessage(JSON.stringify(recommended));

  // Close browser
  await browser.close();
})();
