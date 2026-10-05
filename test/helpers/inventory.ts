import type { Locator, Page } from '@playwright/test';

export class inventoryPage {
    readonly ProductTitle: Locator;
    readonly backPackButton: Locator;
    readonly bikeLightButton: Locator;
    readonly boltTShirtButton: Locator;
    readonly shoppingCartButton: Locator;
    readonly deleteBikeLightButton: Locator;

    constructor(page: Page) {
        this.ProductTitle = page.locator('div[data-test="title"]');
        this.backPackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.bikeLightButton = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.boltTShirtButton = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.shoppingCartButton = page.locator('[data-test="shopping-cart-link"]');
        this.deleteBikeLightButton = page.locator('[data-test="remove-sauce-labs-bike-light"]');
    }
}

export class navBarPage {
    readonly openMenuButton: Locator;
    readonly allItemsButton: Locator;

    constructor(page: Page) {
        // this.openMenuButton = page.locator('[data-test="open-menu"]');
        this.openMenuButton = page.getByRole('button', { name: 'Open Menu' });
        this.allItemsButton = page.locator('[data-test="inventory-sidebar-link"]');
    }
}





//  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//   await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
//   await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
//   await page.locator('[data-test="shopping-cart-link"]').click();
//   await page.getByRole('button', { name: 'Open Menu' }).click();
//   await page.locator('[data-test="inventory-sidebar-link"]').click();
//   await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
//   await page.locator('[data-test="shopping-cart-link"]').click();
//   await page.locator('[data-test="continue-shopping"]').click();
// });