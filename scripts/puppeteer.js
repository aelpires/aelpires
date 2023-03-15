const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://www.example.com');
  await page.screenshot({ path: 'example.png' });
  await browser.close();
}

run();