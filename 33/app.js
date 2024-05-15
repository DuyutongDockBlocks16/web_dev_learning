import { test, expect } from "@playwright/test";

// This file contains tests for the following exercise:
// Example End-to-End Testing with Playwright

test('Check if the homepage loads successfully', async ({ page }) => {
    // Navigate to the homepage
    await page.goto("https://example.com");

    // Check if the title of the page is correct
    const title = await page.title();
    expect(title).toBe("Example Domain");

    // Check if the page contains expected content
    const content = await page.textContent("body");
    expect(content).toContain("Example Domain");
});

test('Check if the navigation works correctly', async ({ page }) => {
    // Navigate to the homepage
    await page.goto("https://example.com");

    // Click on a link to navigate to another page
    await Promise.all([
        page.waitForNavigation(),
        page.click("a[href='https://www.iana.org/domains/example']")
    ]);

    // Check if the new page loads successfully
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://www.iana.org/domains/example");
});
