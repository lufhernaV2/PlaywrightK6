class commonFunctions {
    constructor(page) {
        this.page = page;
    }

    async loginToShop() {
        await this.page.goto('https://www.saucedemo.com/');
        this.userNameField.type('standard_user');
        this.passwordField.type('secret_sauce');
        await this.submitButton.click();
    }
}