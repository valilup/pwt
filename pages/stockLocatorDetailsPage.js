exports.StockLocatorDetailsPage = class StockLocatorDetailsPage {

    constructor(page) {
        this.page = page;
        this.carName = page.locator('[aria-label="Vehicle Intro"] [data-component="model-name"] h1');
        this.carModel = page.locator('[aria-label="Vehicle Intro"] [class="tw-mb-0 tw-mt-ng-100 body-1"]');
        this.carPrice = page.locator('[class="price subtitle-1"]');
        this.getOfferButton = page.getByLabel('Vehicle Intro').getByRole('link', { name: 'Jetzt online kaufen / leasen' });

    }
}