import {StockLocatorDetailsPage} from '../pages/stockLocatorDetailsPage';
import {ShopPage} from '../pages/shopPage';
import {test, expect} from '@playwright/test';
const dataSet = require('../data/stockLocatorUrl.json');

dataSet.forEach(data =>{
    test(`Stock locator and shop name, model and price should be the same for ${data.carName} car, test ${data.tc}`, async ({page, context}) => {
        const stockLocatorDetailsPage = new StockLocatorDetailsPage(page);

        // navigate to stockLocatorDetailsPage
        await page.goto(data.url, {waitUntil: "load"});
        await page.getByRole('button', { name: 'Alle akzeptieren' }).click();

        // store the name
        const carNameWithPunctuation = await stockLocatorDetailsPage.carName.innerText();
        const carName = carNameWithPunctuation.slice(0, -1);

        // store the model
        // const carModel = await stockLocatorDetailsPage.carModel.innerText();

        // store the price
        const carPrice = await stockLocatorDetailsPage.carPrice.innerText();

        // click on get online price
        const pagePromise = context.waitForEvent('page');

        // open a new tab
        await stockLocatorDetailsPage.getOfferButton.click();
        const newPage = await pagePromise;
        await newPage.waitForLoadState("networkidle");

        // create a shopPage object
        const shopPage = new ShopPage(newPage);

        // store the car name car model and car price from the shop
        const shopCarNameAndModel = await shopPage.carNameAndModel.innerText();
        const shopCarPrice = await shopPage.carPrice.innerText();

        // check the name and model and price are the same as in stock locator details page
        expect(shopCarNameAndModel).toContain(carName);
        // expect(shopCarNameAndModel).toContain(carModel);
        expect(shopCarPrice).toBe(carPrice.trim());
    });
});
