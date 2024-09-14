import {type Locator, type Page} from '@playwright/test';

export class RangePage {
    readonly page: Page;
    readonly primaryPageHeaderText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.primaryPageHeaderText = page.locator('//h1/span/span');
    }

    async getPrimaryPageHeaderText(): Promise<string> {
        return await this.primaryPageHeaderText.textContent();
    }
}