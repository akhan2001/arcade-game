const { assert } = require('console');
const fs = require('fs');

// test('Checking if game is included',()=>{
//     let file = fs.readFile('snakeFile.js',(err,data)=>{
      
//     });

//     expect(file).not.toBeNull();
// });
// import puppeteer from 'puppeteer';

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
});
