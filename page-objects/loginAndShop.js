import { CommonFunctions } from "../utilities/commonFunctions.js";
// import { check, fail } from 'k6';

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
        this.checkOutContinueButton = page.locator('[data-test="continue"]');
        this.finishCheckingOutButton = page.locator('[data-test="finish"]');
        this.checkOutCompleteContainer = page.locator('#checkout_complete_container');
        
        this.totalCheckOutAmount = page.locator('.summary_info_label summary_total_label');
        this.completedOrderHeader = page.locator('.complete-header');
    }

    async loginAndShop() {
        const commonFunctions = new CommonFunctions(this.page);
        await commonFunctions.loginToStore();
        // ============== continue to shop after logging in
        await this.sauceLabsBackPackItem.click();
        await this.sauceLabsOnesie.click();
        await this.shoppingCartIcon.click();
        await this.checkOutButton.click();
        await this.checkOutFirstName.type('Luis');
        await this.checkOutLastName.type('Shmuis');
        await this.checkOutZipCode.type('33455');
        await this.checkOutButton.click();
        await this.finishCheckingOutButton.click();
        // const verifyCheckoutMessage = check(this.checkOutCompleteContainer, {
        //     'Confirm that the checkout element appears': (res) => 
        //     res.body.includes('Thank you for your order!')
        // });
        // if (!verifyCheckoutMessage) {
        //     fail('Confirmation paragraph is not present')
        // }
        await this.page.screenshot({ path: 'screenshots/screenshot.png'});
        // expect(this.shoppingCartItemsNumber).should.have.text('2');
        // expect(this.shoppingCartItemsNumber).to.have('2');
        // console.log(`This is the number for the shopping cart stuff ${typeof this.shoppingCartItemsNumber}`)
        // await expect(this.totalListItems).to.have('2');
        // console.log(`This is the total number of items in the list ${typeof this.totalListItems}`);
    }
}