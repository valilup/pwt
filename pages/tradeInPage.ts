import {type Locator, type Page } from '@playwright/test';

export class TradeInPage {
    readonly page: Page;
    readonly skipAndContinueToCheckoutButton: Locator;
    readonly continueToNextStepButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.skipAndContinueToCheckoutButton = page.locator('[data-test="dcs-trade-in-component-tradein-cta-skip-a-button"]');
        this.continueToNextStepButton = page.locator('[data-test="dcs-previous-next-component-finance-cta-continue-a-button"]');
    }

    async skipTradeIn(): Promise<void> {
        await this.skipAndContinueToCheckoutButton.click();
        await this.continueToNextStepButton.click();
    }

}