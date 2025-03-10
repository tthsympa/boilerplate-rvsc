import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3001')
})

test('should display title', async ({ page }) => {
  await expect(page.getByText('R.V.SC')).toBeVisible()
})
