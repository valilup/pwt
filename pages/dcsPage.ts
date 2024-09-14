import {type Locator, type Page } from '@playwright/test';

export class DcsPage {
    readonly page: Page;
    readonly continueButton: Locator;
    readonly confirmAddressButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.continueButton = page.locator('[data-test="dcs-previous-next-component-cta-save-text-a-button"]');
        this.confirmAddressButton = page.locator('[data-test="dcs-address-details-modal-component-address-validation-accept-a-button"]');
    }

    async confirmPersonalDetails(): Promise<void> {
        await this.continueButton.click();
        await this.confirmAddressButton.click();
    }

}