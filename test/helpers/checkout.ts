import type { Locator, Page } from '@playwright/test';

export class checkOutPage {
    readonly firstname: Locator;
    readonly lastname: Locator;
    readonly postalcode: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly completeHeader: Locator;

    constructor(page: Page) {
        this.firstname = page.locator('[data-test="firstName"]');
        this.lastname = page.locator('[data-test="lastName"]');
        this.postalcode = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.completeHeader = page.locator('[data-test="complete-header"]');
    }
}
