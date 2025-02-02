const { assert } = require('console');
const fs = require('fs');

jest.setTimeout(10000);
const puppeteer = require('puppeteer');

describe('Play Game Button Test', () => {
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
  
	it('should display six dice when "Play Game" button is clicked', async () => {
	  await page.goto('https://cis4250w24-05.socs.uoguelph.ca/dice');
	  await page.click('#playGameBtn');
	  await page.waitForSelector('#dice1', { visible: true });
  
	  // Count the number of dice displayed
	  const numberOfDiceDisplayed = await page.evaluate(() => {
		const diceIds = ['dice1', 'dice2', 'dice3', 'dice4', 'dice5', 'dice6'];
		return diceIds.reduce((count, id) => {
		  const dice = document.getElementById(id);
		  return count + (dice && dice.style.display !== 'none' ? 1 : 0);
		}, 0);
	  });
  
	  // Assert that six dice are displayed
	  expect(numberOfDiceDisplayed).toBe(6);
	});
}, 10000);
  