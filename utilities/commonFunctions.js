export class CommonFunctions {
    constructor(page) {
        this.page = page;
        this.userNameField = page.locator('#user-name')
        this.passwordField = page.locator('#password');
        this.submitButton = page.locator('#login-button');
    }

    async closeBrowserPage() {
        this.page.close();
    }

    async loginToStore() {
        await this.page.goto('https://www.saucedemo.com/');
        this.userNameField.type('standard_user');
        this.passwordField.type('secret_sauce');
        await this.submitButton.click();
    }
}