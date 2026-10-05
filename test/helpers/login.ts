import type { Locator, Page } from '@playwright/test';

export class LoginPage {
	readonly usernameField: Locator;
	readonly passwordField: Locator;
	readonly logInButton: Locator;
	readonly errorMessage: Locator;

	constructor(page: Page) {
		this.usernameField = page.locator('input[data-test="username"]');
		this.passwordField = page.locator('input[data-test="password"]');
		this.logInButton = page.locator('input[data-test="login-button"]');
		this.errorMessage = page.locator('[data-test="error"]');
	}
}

