import {type Locator, type Page } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly buyNowButton: Locator;
    readonly titleTextOfCartPage: string;

    constructor(page: Page) {
        this.page = page;
        this.buyNowButton = page.locator('data-testid=reserve-car-button').first();
        this.titleTextOfCartPage = '[data-testid="webcom-cart-header-text"]';

    }

    async clickOnBuyNowButton(){
        await this.buyNowButton.click();
    }

    async waitForTitleTextOfCartPage(){
        await this.page.waitForSelector(this.titleTextOfCartPage, {timeout: 40000});
    }
}