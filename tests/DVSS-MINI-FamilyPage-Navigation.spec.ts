import {expect, test} from "../pages/base";
// @ts-ignore
import specialData from "../data/DVSS-MINI-FamilyPage-NavigationIT-TD.json";
// @ts-ignore
import testData from "../data/DVSS-MINI-FamilyPage-Navigation-TD.json";


// testData.forEach((data: { country: any; market: string; endpoint: string; rangePageHeaderText: string }) => {
//     test(`${data.country} - Navigate successfully to the Family Range Page`, async ({
//                                                                                         homePage,
//                                                                                         rangePage,
//                                                                                         page
//                                                                                     }) => {
//         await homePage.gotoAndAcceptCookies(data.market, data.endpoint);
//         await homePage.clickOnExploreMiniModels();
//
//         expect(page.url()).toMatch(/\/(range\.html|modeller\.html)/);
//         expect(await rangePage.getPrimaryPageHeaderText()).toBe(data.rangePageHeaderText);
//     });
// });

// const italyData = specialData;
// test(`${italyData.country} - Navigate successfully to the Family Range Page`, async ({
//                                                                                          homePage,
//                                                                                          rangePage,
//                                                                                          page
//                                                                                      }) => {
//     await homePage.gotoAndAcceptCookies(italyData.market, italyData.endpoint);
//     await homePage.clickOnExploreMiniModelsItalyButton();
//
//     expect(page.url()).toContain("/change-vehicle.html");
//     expect(await rangePage.getPrimaryPageHeaderText()).toBe(italyData.rangePageHeaderText);
// });

test("google test ", async({page})=>{
    await page.goto("https://www.google.com/search?q=");

    await page.locator("[id=\"L2AGLb\"] div").click();
    await page.locator("[id=\"APjFqb\"]").fill("panda");
    await page.keyboard.press("Enter");

    // await page.pause();
    expect(await page.locator("a [data-attrid=\"title\"]").innerText()).toContain('Panda');
})
