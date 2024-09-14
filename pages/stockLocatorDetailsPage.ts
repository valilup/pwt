import {type Locator, type Page} from '@playwright/test';

export class StockLocatorDetailsPage {
    readonly page: Page;
    readonly addToCartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartButton = page.locator('//neo-button[@id="vehiclestage-order-cta"]');
    }

    async addCarToCart() {
        await this.addToCartButton.isEnabled({timeout: 40000});
        await this.page.waitForTimeout(1000);
        await this.addToCartButton.isEnabled();
        await this.addToCartButton.focus();
        await this.addToCartButton.click({delay: 1000});
    }

    async waitForTheCartPageToLoadFromStockLocator() {
        let counter: number = 0;
        let elementState: boolean = await this.addToCartButton.isVisible();

        while (elementState === true) {
            await this.page.waitForTimeout(100);
            elementState = await this.addToCartButton.isVisible();
            counter++;

            if (counter > 100) {
                console.error("The website is taking too long to load the Shop page => waitForTheCartPageToLoadFromStockLocator()");
                break;
            }
        }
    }
}