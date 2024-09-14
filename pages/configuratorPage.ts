import {type Locator, type Page } from '@playwright/test';

export class ConfiguratorPage {
    public CON_QX_USER = process.env.CON_QX_USER;
    public CON_QX_PASS = process.env.CON_QX_PASS;
    readonly page: Page;
    readonly userField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly headerSecondNavBar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userField = page.getByPlaceholder('User Name')
        this.passwordField = page.getByPlaceholder('Password')
        this.loginButton = page.getByRole('button', { name: 'Login', exact: true })
        this.headerSecondNavBar = page.locator('#stickyHeader');
    }

    async goto(conMarketLanguageAndEndpoint: string){
        await this.page.goto(`https://configure.int.miniweb.eu-central-1.aws.bmw.cloud/${conMarketLanguageAndEndpoint}`, {waitUntil: 'commit'});
    }

    async loginToConfigurator(){
        await this.userField.fill(`${this.CON_QX_USER}`)
        await this.passwordField.fill(`${this.CON_QX_PASS}`)
        await this.loginButton.click();
    }
}