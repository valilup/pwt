import {type Locator, type Page} from '@playwright/test';
import 'dotenv/config'

export class HomePage {
    public QA_ENV_AUTH_CREDENTIALS = process.env.QA_ENV_AUTH_CREDENTIALS;
    readonly page: Page;
    readonly acceptCookiesButton: Locator;
    readonly buyMiniButton: Locator;
    readonly exploreMiniModelsButton: Locator;
    readonly exploreMiniModelsItalyButton: Locator;
    readonly miniLogo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.acceptCookiesButton = page.locator('[class*="accept-button"]');
        this.buyMiniButton = page.locator('[class="home-quick-entries"] a[href*="/stocklocator#/results"]');
        this.exploreMiniModelsButton = page.locator('[class="home-quick-entries"] a[data-url*="/range.html"]').first();
        this.exploreMiniModelsItalyButton = page.getByRole('link', {name: 'Configura la tua MINI'});
        this.miniLogo = page.locator('[class="md-fsm-logo"]')
    }

    async gotoAndAcceptCookies(market: string, endpoint: string): Promise<void> {
        await this.page.goto(`https://${this.QA_ENV_AUTH_CREDENTIALS}mini-${market}-awsint-m3.int.miniweb.eu-central-1.aws.bmw.cloud/${endpoint}`, {waitUntil: 'commit'});
        await this.acceptCookiesButton.click();
    }

    async clickOnBuyMini(): Promise<void> {
        await this.buyMiniButton.click();
    }

    async clickOnExploreMiniModels(): Promise<void> {
        await this.exploreMiniModelsButton.click();
    }

    async clickOnExploreMiniModelsItalyButton(): Promise<void> {
        await this.exploreMiniModelsItalyButton.click();
    }
}