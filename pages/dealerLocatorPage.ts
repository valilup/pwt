import {type Locator, type Page } from '@playwright/test';

export class DealerLocatorPage {
    readonly page: Page;
    readonly searchForNameInput: Locator;
    readonly searchOption: Locator;
    readonly handoverDateCalendar: Locator;
    readonly firstAvailableDate: Locator;
    readonly continueToNextStepButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.searchForNameInput = page.locator('id=downshift-1-input');
        this.searchOption = page.locator('id=downshift-1-item-0');
        this.handoverDateCalendar = page.locator("//input[contains(@class, 'date-input')]");
        this.firstAvailableDate = page.locator('[class="dropdown-list calendar"] div[class="option calendar-day subtitle-2"]').first();
        this.continueToNextStepButton = page.locator('[data-test="dcs-delivery-details-component-dealerselection-cta-button-text-a-button"]');
    }

    async completeDealerInformation(dealerName: string): Promise<void> {
        await this.searchForNameInput.fill(dealerName);
        await this.searchOption.click();
        await this.handoverDateCalendar.click();
        await this.firstAvailableDate.click();
        await this.continueToNextStepButton.click();
    }

}