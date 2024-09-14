// import {expect, test} from "../pages/base";
// // @ts-ignore
// import testDataWishlist from "../data/DVSS-MINI-Navigation-Checks-TD1.json";
// // @ts-ignore
// import testData from "../data/DVSS-MINI-Navigation-Checks-TD2.json";
//
// testDataWishlist.forEach((data) => {
//     test(`${data.country} - Verify wishlist page opens successfully`, async ({
//                                                                                  page,
//                                                                                  loginPage,
//                                                                                  homePage,
//                                                                                  wishlistPage
//                                                                              }) => {
//         await wishlistPage.goto(data.market, data.endpoint);
//         await loginPage.login(data.user, data.pass);
//
//         if (data.country === "PL") {
//             await page.getByRole('button', {name: 'MINI Private'}).click();
//         }
//
//         await homePage.acceptCookiesButton.click();
//
//         expect(page.url()).toContain('/wishlist');
//         await expect(wishlistPage.wishlistPageHeadline).toBeVisible({timeout: 30000});
//     });
// });
//
// testData.forEach((data) => {
//     test(`${data.country} - Verify home page opens successfully and the Mini logo is displayed`, async ({
//                                                                                                             page,
//                                                                                                             homePage
//                                                                                                         }) => {
//         await homePage.gotoAndAcceptCookies(data.market, data.endpoint);
//
//         await expect(homePage.miniLogo).toBeVisible();
//         expect(page.url()).toContain('/home');
//     });
// });
//
// testData.forEach((data) => {
//     test(`${data.country} - Verify stock locator page opens successfully`, async ({page, stockLocatorPage}) => {
//         await stockLocatorPage.goto(data.market, data.language);
//
//         expect(page.url()).toContain('/stocklocator');
//     });
// });
//
// testData.forEach((data) => {
//     test(`${data.country} - Verify configurator page opens successfully`, async ({configuratorPage}) => {
//         await configuratorPage.goto(data.conMarketLanguageAndEndpoint);
//         await configuratorPage.loginToConfigurator();
//
//         await expect(configuratorPage.headerSecondNavBar).toBeVisible({timeout: 15000});
//     });
// });
//
// testData.forEach((data) => {
//     test(`${data.country} - Verify the cart page opens successfully`, async ({
//                                                                                       homePage,
//                                                                                       page,
//                                                                                       stockLocatorPage,
//                                                                                       stockLocatorDetailsPage,
//                                                                                       cartPage
//                                                                                   }) => {
//         await homePage.gotoAndAcceptCookies(data.market, data.endpoint);
//         await homePage.clickOnBuyMini();
//
//         //check that the url contains /stocklocator
//         await page.waitForLoadState("domcontentloaded")
//         expect(page.url()).toContain("/stocklocator")
//
//         await stockLocatorPage.specialClickOnVehicleDetailsButton(data.carModelToSelect, Number(data.carPositionToSelect));
//         await stockLocatorDetailsPage.addCarToCart();
//         await stockLocatorDetailsPage.waitForTheCartPageToLoadFromStockLocator()
//
//         //check that the url contains shop/ls/cart/vehicles
//         await cartPage.waitForTitleTextOfCartPage();
//         expect(page.url()).toContain('shop/ls/cart/vehicles');
//     });
// });