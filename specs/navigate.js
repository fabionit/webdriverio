import HomePage from '../pages/homePage.js';

describe ('Go to...', () => {

    before('Go to the website', () => {
        HomePage.accessWebsite();
    });


    it('Should go to Api Page', () => {
        const wdioUrl = 'http://webdriver.io/api.html';

        HomePage.goTo(HomePage.apiTab);
        
        let url = browser.getUrl();
        //
        expect(url).to.equal(wdioUrl);
    });
});
