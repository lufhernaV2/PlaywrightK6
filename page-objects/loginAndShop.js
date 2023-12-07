import { CommonFunctions } from "../utilities/commonFunctions";

class LoginAndShop {
    constructor(page) {
        this.page = page;
        this.sauceLabsBackPackItem = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.sauceLabsOnesie = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
        this.shoppingCartIcon = page.locator('#shopping_cart_container');
        this.shoppingCartItemsNumber = page.locator('.shopping_cart_badge');
        this.totalListItems = page.locator('.cart_item');
    }

    async loginAndShop() {
        let totalItems;
        const commonFunctions = new CommonFunctions(this.page);
        commonFunctions.loginToStore();
    }
}