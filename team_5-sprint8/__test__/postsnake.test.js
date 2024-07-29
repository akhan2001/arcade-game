const { assert } = require('console');
const fs = require('fs');

jest.setTimeout(10000);
const puppeteer = require('puppeteer');

describe('Modal Visibility Test', () => {
  it('should display the modal when Play Game is clicked', async () => {
    const browser = await puppeteer.launch({
        headless: 'false',
        args: ["--no-sandbox"]
    });
    const page = await browser.newPage();

    // Directs the page to go to the snake game page
    await page.goto('https://cis4250w24-05.socs.uoguelph.ca/snake');

    // Clicks the "Play Game" button
    await page.click('#playGameBtn');

    // Checks for the modal to be visible
    const modalVisible = await page.waitForSelector('#snakeGameModal', { visible: true });
    expect(modalVisible).toBeTruthy();

    // Close the browser
    await browser.close();
  });
}, 10000);

describe('Snake Game Food Placement Test', () => {
  let browser;
  let page;

  beforeAll(async () => {
    // Launch a new browser session
    browser = await puppeteer.launch({
      headless: 'false',
      args: ["--no-sandbox"]
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    // Close the browser session
    await browser.close();
  });

  it('should place a food piece within canvas bounds when the game starts', async () => {
    await page.goto('https://cis4250w24-05.socs.uoguelph.ca/snake');
    await page.waitForSelector('#playGameBtn');
    await page.click('#playGameBtn');
    await page.waitForSelector('canvas#snakeGameCanvas', { visible: true });

    // Retrieve foodPosition and canvas dimensions together
    const { foodPosition, canvasWidth, canvasHeight } = await page.evaluate(() => {
      const canvas = document.getElementById('snakeGameCanvas');
      const food = window.food; // Assuming food is attached to window object

      // Return food position and canvas dimensions
      return {
        foodPosition: food,
        canvasWidth: canvas.width,
        canvasHeight: canvas.height
      };
    });

    // Now you can safely use canvasWidth and canvasHeight in your expectations
    expect(foodPosition).toBeDefined();
    expect(foodPosition.x).toBeGreaterThan(0);
    expect(foodPosition.y).toBeGreaterThan(0);
    expect(foodPosition.x).toBeLessThan(canvasWidth);
    expect(foodPosition.y).toBeLessThan(canvasHeight);
  });
});
