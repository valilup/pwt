exports.StockLocatorDetailsPage = class StockLocatorDetailsPage {

    constructor(page) {
        this.page = page;
        this.carName = page.locator('[aria-label="Vehicle Intro"] [data-component="model-name"] h1');
        this.carPrice = page.locator('[class="price subtitle-1"]');
        this.getOfferButton = page.getByLabel('Vehicle Intro').getByRole('link', { name: 'Jetzt online kaufen / leasen' });

    }
}