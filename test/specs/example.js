describe('', function() {
    it('take some screenshots', function() {
        browser.url('http://webdriver.io');

        var title = browser.getTitle();
        expect(title).toBe('WebdriverIO - WebDriver bindings for Node.js');
        console.log(capabilities)
        browser.saveScreenshot('./shots/' + capabilities.browserName + '/index.png');
    });
});
