// import {expect, test} from "../pages/base";
// // @ts-ignore
// import testData from "../data/DVSS-MINI-Navigation-Checks-TD2.json";
//
// testData.forEach((data: { country: any; market: string; endpoint: string; }) => {
//     test(`${data.country} - Add a vehicle to cart (BTS)`, async ({
//                                                                      homePage,
//                                                                      stockLocatorPage,
//                                                                      cartPage,
//                                                                      page
//                                                                  }) => {
//         await homePage.gotoAndAcceptCookies(data.market, data.endpoint);
//         await homePage.clickOnBuyMini();
//
//         //check that the url contains /stocklocator
//         await page.waitForLoadState("domcontentloaded")
//         expect(page.url()).toContain("/stocklocator");
//
//         // await homePage.acceptCookiesButton.click();
//         await stockLocatorPage.clickOnShowVehicleDetailsButton();
//         await stockLocatorPage.clickOnAddToBasketButton();
//         await cartPage.clickOnBuyNowButton();
//
//         //check that the user arrives on the DCS page and the user contains correct values
//         await page.waitForLoadState("domcontentloaded")
//         const cartUrl = page.url();
//         expect(cartUrl).toContain("awsint-m3.int.miniweb.eu-central-1.aws.bmw.cloud");
//         expect(cartUrl).toContain("/shop/dcs/new-sales/checkout");
//     });
// });
