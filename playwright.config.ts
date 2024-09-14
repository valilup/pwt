import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 5 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [
        ['list'],
        ['html']
    ],
    outputDir: 'playwright/reports',
    timeout: 60 * 1000,
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        trace: process.env.CI ? 'retain-on-failure' : 'on-first-retry',
        video: process.env.CI ? 'retain-on-failure' : 'off',
        // proxy: !!process.env.SELENIUMBOX_ENABLED ? { server: 'proxy.ccc-ng-1.eu-central-1.aws.cloud.bmw:8080' } : undefined,
        // connectOptions: !!process.env.SELENIUMBOX_ENABLED ? {
        //   wsEndpoint: `wss://seleniumbox.bmwgroup.net:443/e34/api/ws/playwright/chrome?playwright=1.44.0&token=${process.env.SELENIUMBOX_TOKEN}&video=false&testName=SUM`
        // } : undefined
        proxy: process.env.CI ? {
                server: 'proxy.ccc-ng-1.eu-central-1.aws.cloud.bmw:8080',
                bypass: '.bmwgroup.net'
            } // <- bypass all BMW internal websites (comma-separated list)
            : undefined, // <- use proxy for SeleniumBox to access websites
        connectOptions: process.env.CI ? {
            wsEndpoint: `wss://seleniumbox.bmwgroup.net:443/e34/api/ws/playwright/chrome?playwright=1.44.0&token=d995b148-b194-4f&video=false&testName=SUM`
        } : undefined // <- configure endpoint to use SeleniumBox
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome']
            }
        },
    ],
});
