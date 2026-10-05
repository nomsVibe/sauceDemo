import { expect, test } from '@playwright/test';
import { LoginPage } from './helpers/login.ts';
import { inventoryPage, navBarPage } from './helpers/inventory.ts';
import { cartPage } from './helpers/cart.ts';  
import { checkOutPage } from './helpers/checkout.ts';

// Before each test, log into the application 
test.beforeEach(async ({ page }) => {
    await page.goto("/");
    const loginPage = new LoginPage(page);
    await expect(loginPage.logInButton).toBeVisible();
	await loginPage.usernameField.fill('standard_user');
	await loginPage.passwordField.fill('secret_sauce');
	await loginPage.logInButton.click();
});

test('allows a user to log in successfully and perform inventory actions', async ({ page }) => {
    const inventory = new inventoryPage(page);
    const navBar = new navBarPage(page);
    const cart = new cartPage(page);
    const checkOut = new checkOutPage(page);

    // Perform inventory actions
    await inventory.backPackButton.click();
    await inventory.bikeLightButton.click();
    await inventory.boltTShirtButton.click();
    await inventory.shoppingCartButton.click();

    // Navbar menu
    await navBar.openMenuButton.click();
    await navBar.allItemsButton.click();

    // Remove bike light from cart
    await inventory.deleteBikeLightButton.click();

    // Go back to shopping cart and continue shopping
    await inventory.shoppingCartButton.click();
    await cart.checkoutButton.click();
    await expect(inventory.deleteBikeLightButton).not.toBeVisible();

    // Fill in checkout information
    await checkOut.firstname.fill('ny');
    await checkOut.lastname.fill('test');
    await checkOut.postalcode.fill('3000');
    await checkOut.continueButton.click();

    // Finish checkout and verify completion
    await checkOut.finishButton.click();
    await expect(checkOut.completeHeader).toBeVisible();

});