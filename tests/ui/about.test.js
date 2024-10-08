const { test, expect } = require('@playwright/test');

test('Check about page heading', async ({ page }) => {
  await page.goto('http://localhost:8080/about');
  const heading = await page.$('h1');
  const text = await heading.textContent();
  expect(text.trim()).toBe('About');
});

test('Check about page paragraph', async ({ page }) => {
  await page.goto('http://localhost:8080/about');
  const paragraph = await page.$('p');
  const text = await paragraph.textContent();
  expect(text.trim()).toBe('This is the Regular exam for Software Engineering and DevOps course @ SoftUni');
});
