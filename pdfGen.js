const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('http://ste2425.github.io/CV');
  await page.waitForSelector('.fs-1.p-5.text-center');

  await page.evaluate(() => {
    document.querySelector('.generated-message').classList.remove('d-none'); // Show the auto generated message
    document.querySelector('.generate-message').classList.add('d-none'); // Hide the download pdf button
  });

  await page.pdf({ path: 'out/StephenCooper-CV.pdf', format: 'A4', printBackground: true });
  await browser.close();
})();