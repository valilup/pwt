import {expect, test} from "../pages/base";
// @ts-ignore
import testData from "../data/DVSS-MINI-Navigation-Checks-TD1.json";

testData.forEach((data) => {
    test(`${data.country} - Checkout vehicle successfully (BTS)`, async ({
                                                                                  homePage,
                                                                                  stockLocatorPage,
                                                                                  cartPage,
                                                                                  tradeInPage,
                                                                                  dealerLocatorPage,
                                                                                  loginPage,
                                                                                  page
                                                                              }) => {
        await homePage.gotoAndAcceptCookies(data.market, data.endpoint);
        await homePage.clickOnBuyMini();

        //check that the url contains /stocklocator
        await page.waitForLoadState("domcontentloaded")
        await expect(page.url()).toContain("/stocklocator");

        await stockLocatorPage.clickOnShowVehicleDetailsButton();
        await stockLocatorPage.clickOnAddToBasketButton();
        await cartPage.clickOnBuyNowButton();

        await tradeInPage.skipTradeIn();
        await dealerLocatorPage.completeDealerInformation(data.dealerName);

        await loginPage.loginButton.click();
        await loginPage.login(data.user, data.pass);

        //WIP
        await page.waitForLoadState("domcontentloaded")
        await page.pause();

        // await dcsPage.confirmPersonalDetails();
        // continue with confirming PersonalDetails and waiting for the contract to be generated
    });
})
