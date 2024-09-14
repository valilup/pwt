import {type Locator, type Page} from '@playwright/test';

export class StockLocatorPage {
    public QA_ENV_AUTH_CREDENTIALS = process.env.QA_ENV_AUTH_CREDENTIALS;
    readonly page: Page;
    readonly addToBasketButton: Locator;
    readonly showVehicleDetailsButtons: Locator;
    readonly addToCartButton: Locator;
    readonly resetFilterButton: Locator;
    readonly vehicleCardsList: string


    constructor(page: Page) {
        this.page = page;
        this.addToBasketButton = page.locator('id=vehiclestage-order-cta');
        this.showVehicleDetailsButtons = page.locator('neo-button[brand="this.brand"]');
        this.addToCartButton = page.locator('//neo-button[@id="vehiclestage-order-cta"]');
        this.vehicleCardsList = 'stl-modelcard[class="card-container model-card"]';
        this.resetFilterButton = page.locator('[id="filter-block-reset-all"] neo-button');
    }

    async goto(market: string, language: string) {
        await this.page.goto(`https://${this.QA_ENV_AUTH_CREDENTIALS}mini-${market}-awsint-m3.int.miniweb.eu-central-1.aws.bmw.cloud/${language}/sl/stocklocator#/results`, {waitUntil: 'commit'});
    }

    async clickOnShowVehicleDetailsButton(): Promise<void> {
        await this.showVehicleDetailsButtons.nth(2).click();
    }

    async clickOnAddToBasketButton() {
        await this.addToBasketButton.click();
    }

    async specialClickOnVehicleDetailsButton(carModel: string, position: number) {
        await this.waitForTheCarsToBeVisibleInStockLocator();
        await this.clickOnModelCarAndPosition(carModel, position);
        await this.resetFilterIfPresent();
    }

    async clickOnModelCarAndPosition(carModel: string, position: number) {
        await this.page.evaluate(({carModel, position}) => {
            document.querySelectorAll(`[data-dealer-information*="${carModel}"]`)[`${position}`]
                .shadowRoot.querySelector('neo-button')
                .shadowRoot.querySelector('a').click();
        }, {carModel, position});
    }

    async waitForTheCarsToBeVisibleInStockLocator() {
        let numberOfCardsAvailable = await this.page.$$(this.vehicleCardsList);
        let counter = 0;

        let numberOfElements = numberOfCardsAvailable.length;
        while (numberOfElements === 0) {
            await this.page.waitForTimeout(500);
            numberOfCardsAvailable = await this.page.$$(this.vehicleCardsList);
            numberOfElements = numberOfCardsAvailable.length;
            counter++;

            if (counter > 30) {
                console.error("Cars not visible in StockLocator in les then 30 seconds => waitForTheCarsToBeVisibleInStockLocator()")
                break;
            }
        }
    }

    async resetFilterIfPresent() {
        if (await this.resetFilterButton.isVisible()) {
            await this.resetFilterButton.click();
        }
    }
}