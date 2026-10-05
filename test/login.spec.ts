import { expect, test } from '@playwright/test';
import { LoginPage } from './helpers/login.ts';

// Before each test, log into the application and verify the dashboard
test.beforeEach(async ({ page }) => {
 	await page.goto("/");
});

test('allows a user to log in successfully', async ({ page }) => {
	const loginPage = new LoginPage(page);

	await expect(loginPage.logInButton).toBeVisible();
	await loginPage.usernameField.fill('standard_user');
	await loginPage.passwordField.fill('secret_sauce');
	await loginPage.logInButton.click();
	await expect(page).toHaveURL(/inventory\.html$/);
});

test('displays an error message for invalid credentials', async ({ page }) => {
	const loginPage = new LoginPage(page);

	await expect(loginPage.logInButton).toBeVisible();
	await loginPage.usernameField.fill('invalid_user');
	await loginPage.passwordField.fill('invalid_password');
	await loginPage.logInButton.click();
	await expect(loginPage.errorMessage).toBeVisible();
});