import {test as base} from "@playwright/test";
import {HomePage} from "./homePage";
import {StockLocatorPage} from "./stockLocatorPage";
import {CartPage} from "./cartPage";
import {TradeInPage} from "./tradeInPage";
import {DealerLocatorPage} from "./dealerLocatorPage";
import {LoginPage} from "./loginPage";
import {DcsPage} from "./dcsPage";
import {WishlistPage} from "./wishlistPage";
import {RangePage} from "./rangePage";
import {ConfiguratorPage} from "./configuratorPage";
import {StockLocatorDetailsPage} from "./stockLocatorDetailsPage";

/**
 * Extending the test functionality of playwright with the page object classes
 * This fixes the issue of always reaching out of the test case
 * Gets rid of always initializing the page object during the test
 * This makes the tests more readable
 * Don't forget to call the page object in the
 */

type MyFixtures = {
    homePage: HomePage;
    stockLocatorPage: StockLocatorPage;
    cartPage: CartPage;
    tradeInPage: TradeInPage;
    dealerLocatorPage: DealerLocatorPage;
    loginPage: LoginPage;
    dcsPage: DcsPage;
    wishlistPage: WishlistPage;
    rangePage: RangePage;
    configuratorPage: ConfiguratorPage;
    stockLocatorDetailsPage: StockLocatorDetailsPage;
}

export const test = base.extend<MyFixtures>({
    homePage: async ({page}, use) => {
        await use(new HomePage(page));
    },
    stockLocatorPage: async ({page}, use) => {
        await use(new StockLocatorPage(page));
    },
    cartPage: async ({page}, use) => {
        await use(new CartPage(page));
    },
    rangePage: async ({page}, use) => {
        await use(new RangePage(page));
    },
    tradeInPage: async ({page}, use) => {
        await use(new TradeInPage(page));
    },
    dealerLocatorPage: async ({page}, use) => {
        await use(new DealerLocatorPage(page));
    },
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },
    dcsPage: async ({page}, use) => {
        await use(new DcsPage(page));
    },
    wishlistPage: async ({page}, use) => {
        await use(new WishlistPage(page));
    },
    configuratorPage: async ({page}, use) => {
        await use(new ConfiguratorPage(page));
    },
    stockLocatorDetailsPage: async ({page}, use) => {
        await use(new StockLocatorDetailsPage(page));
    }
})

export {expect} from "@playwright/test";