import { CommonFunctions } from "../utilities/commonFunctions.js";
import { expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.0/index.js'

export class LoginAndShop {
    constructor(page) {
        this.page = page;
        this.sauceLabsBackPackItem = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.sauceLabsOnesie = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
        this.shoppingCartIcon = page.locator('#shopping_cart_container');
        this.shoppingCartItemsNumber = page.locator('.shopping_cart_badge');
        this.totalListItems = page.locator('.cart_item');
        this.checkOutButton = page.locator('[data-test="checkout"]');
        this.checkOutFirstName = page.locator('[data-test="firstName"]');
        this.checkOutLastName = page.locator('[data-test="lastName"]');
        this.checkOutZipCode = page.locator('[data-test="postalCode"]');
        this.totalCheckOutAmount = page.locator('.summary_info_label summary_total_label');
        this.finishOrderButton = page.locator('[data-test="finish"]');
    }

    async loginAndShop() {
        const commonFunctions = new CommonFunctions(this.page);
        await commonFunctions.loginToStore();
        // ============== continue to shop after logging in
        await this.sauceLabsBackPackItem.click();
        await this.sauceLabsOnesie.click();
        expect(this.shoppingCartItemsNumber).toHaveCount(2);
        await this.shoppingCartIcon.click();
        await expect(this.totalListItems).toHaveCount(2);

    }
}