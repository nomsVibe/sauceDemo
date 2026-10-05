import type { Locator, Page } from '@playwright/test';

export class cartPage {
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.checkoutButton = page.locator('[data-test="checkout"]');
    }
}