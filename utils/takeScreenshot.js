const takeScreenshot = async (page, name) => {
  await page.screenshot({
    quality: 100,
    path: `./images/${name}.jpg`,
    fullPage: true,
  });
};

module.exports = takeScreenshot;