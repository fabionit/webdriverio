class ApiPage {
    
    get apiTab()               { return browser.element('a=API'); }
   

    open(path) {
        path = path || '';
        browser.url('/' + path);
    }

    accessWebsite() {
        browser.url(browser.options.baseUrl);
    }

    getTitle() {
        return browser.getTitle();
    }

    getUrl() {
        return browser.getUrl();
    }

    goTo(page) {
        browser.click(page.selector);
    }

    font(element, isButton = true) {
        let mySelector = isButton ? `${element.selector} ${label}` : `${element.selector}`;
        return {
            color: $(mySelector).getCssProperty('color').value,
            size: $(mySelector).getCssProperty('font-size').value,
            type: $(mySelector).getCssProperty('font-family').value
        };
    } 
    


    // random number giver
    randomName(length) {   
        length = length || 10;
        var randomName = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, length);
        return randomName;
    }

}

export default ApiPage;