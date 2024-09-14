import {type Locator, type Page } from '@playwright/test';
import 'dotenv/config'

export class WishlistPage {
    public QA_ENV_AUTH_CREDENTIALS = process.env.QA_ENV_AUTH_CREDENTIALS;
    readonly page: Page;
    readonly wishlistPageHeadline: Locator;

    constructor(page: Page) {
        this.page = page;
        this.wishlistPageHeadline = page.locator('[data-testid="wishlist-overview-header"]');
    }

    async goto(market: string, endpoint: string): Promise<void> {
        await this.page.goto(`https://${this.QA_ENV_AUTH_CREDENTIALS}mini-${market}-awsint-m3.int.miniweb.eu-central-1.aws.bmw.cloud/${endpoint}`, {waitUntil: 'commit'});
    }
}