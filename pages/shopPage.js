exports.ShopPage = class ShopPage{

    constructor(page){
        this.page = page;
        this.carNameAndModel = page.locator('[slot="element-visible-always"] h3');
        this.carPrice = page.locator('[data-field="totalPrice"] div').nth(1);
    }
}