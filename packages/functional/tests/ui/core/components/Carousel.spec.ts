import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByRole('heading', { name: 'Best Selling Products' }).scrollIntoViewIfNeeded();
  await expect(page.getByRole('link', { name: '[Sample] Tiered Wire Basket' })).toBeVisible();
});

test('Navigate to next set of products', async ({ page }) => {
  await page.getByRole('button', { name: 'Next products' }).click();

  await expect(page.getByRole('link', { name: '[Sample] Fog Linen Chambray' })).toBeVisible();
});

test('Navigate to previous set of products', async ({ page }) => {
  await page.getByRole('button', { name: 'Previous products' }).click();

  await expect(page.getByRole('link', { name: '[Sample] Fog Linen Chambray' })).toBeVisible();
});

test('Navigation on set of products is cyclic', async ({ page }) => {
  await expect(page.getByRole('link', { name: '[Sample] Tiered Wire Basket' })).toBeVisible();

  await page.getByRole('button', { name: 'Next products' }).click();
  await page.getByRole('button', { name: 'Next products' }).click();

  await expect(page.getByRole('link', { name: '[Sample] Tiered Wire Basket' })).toBeVisible();
});
