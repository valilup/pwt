import {type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly loginButton: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly continueEmailButton: Locator;
    readonly continuePassButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginButton = page.locator("//*[@role='button'][contains(@href, 'mylogin')]");
        this.emailInput = page.locator('id=email');
        this.continueEmailButton = page.locator('//*[@id=\'login-form\']//button');
        this.passwordInput = page.locator('id=password');
        this.continuePassButton = page.locator('[id="login-form"] button[class*="primary"]');

    }

    async login(user: string, pass: string): Promise<void> {
        await this.page.waitForLoadState("domcontentloaded");
        await this.emailInput.fill(user);
        await this.continueEmailButton.click();
        await this.passwordInput.fill(pass);
        await this.continuePassButton.click();
    }
}