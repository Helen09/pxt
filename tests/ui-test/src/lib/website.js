import webdriver from 'selenium-webdriver';
import {chrome} from 'selenium-webdriver/chrome';


const WEBSITE_URL = "https://makecode.microbit.org"

class Website {

    constructor(rootURL = WEBSITE_URL) {
        this.rootURL = rootURL;
    }

    async open(path = "") {
        var fullPath = this.getUrl(path);
        console.log(`Open url ${fullPath}`);
        
        await driver.get(fullPath);

        console.info(`Opened URL ${fullPath}`);
        return await driver.manage().window().maximize();
    }

    getUrl(path) {
        if (!path.startsWith("/")) {
            path = "/" + path;
        }
        return this.rootURL + path;
    }

    close() {
        console.info("Close webstie...");
        driver.quit();
    }

}


global.driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
global.until = webdriver.until;


export let website = new Website();