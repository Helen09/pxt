import { By } from 'selenium-webdriver';
import fs from 'fs';
import util from 'util';
const screenshotsFolder = './screenshots';
import dateformat from 'dateformat';

export class DomObject {

    async actionForAll(actionName, findBys) {
        for (let criteria of findBys) {
            if (criteria) {
                // console.debug(`Try to click the element by criteria: ${criteria}`);
                let findBy = this.findBy(criteria);
                //wait until the element can be located
                let element = await this.waitforElementLocated(findBy);

                //Sleep for 2 seconds to make sure the element's state is stable for interactions
                await driver.sleep(2000);

                await element[actionName]();
            }
        }
        return true;
    }
    async waitforElementLocated(criteria) {
        let findBy = this.findBy(criteria);
        let element = await driver.wait(until.elementLocated(findBy));
        return element;

    }

    findBy(criteria) {
        if (typeof criteria === 'string') {
            return By.css(criteria);
        }
        return criteria;
    }

    async backNavigation() {
        let navigation = await driver.navigate();
        return navigation.back();

    }
    async toUrlNavigation(url) {
        let navigation = await driver.navigate();
        return navigation.to(url);

    }

    async getRect(criteria) {
        let element = await this.waitforElementLocated(this.findBy(criteria), 10000);
        return element.getRect();
    }

    async contextClick(criteria) {
        let actions = driver.actions();

        let element = await this.waitforElementLocated(this.findBy(criteria), 10000);
        return actions.contextClick(element).perform();
    }

    async dragAndDropByElement(criteria, criteria2) {
        let actions = driver.actions();

        let origin = await this.waitforElementLocated(this.findBy(criteria), 10000);
        let goal = await this.waitforElementLocated(this.findBy(criteria), 10000);

        return actions.dragAndDrop(origin, goal).perform();
    }

    async dragAndDropByCoordinate(criteria, xoffset, yoffset) {
        let actions = driver.actions();

        let origin = await this.waitforElementLocated(this.findBy(criteria), 10000);
        return actions.dragAndDrop(origin, { x: xoffset, y: yoffset }).perform();
    }

    async catchScreenShot(name) {
        if (!fs.existsSync(screenshotsFolder)) {
            fs.mkdirSync(screenshotsFolder);
        }

        let writeFile = util.promisify(fs.writeFile);
        let fileName = name + "-" + dateformat(new Date(), "yyyymmddHHMMss");
        await driver.takeScreenshot().then(function (image) {
            writeFile(`${screenshotsFolder}/${fileName}.png`, image, 'base64', function (err) {
                if (err) {
                    console.error(err);
                }
            });
        });
        return true;
    }

    async closeCurrentWindow() {
        let oldWindow = "";
        await driver.getAllWindowHandles().then(function(handles){
            oldWindow = handles[0];
            driver.close();
            driver.switchTo().window(oldWindow);
        });
    }

    async switchToNewWindow() {
        let newWindow = "";
        await driver.getAllWindowHandles().then(function(handles){
            newWindow = handles[1]
            driver.switchTo().window(newWindow);
        });
    }


    async switchToIframe(criteria) {
        let element = await this.waitforElementLocated(this.findBy(criteria), 10000);
        let newIframe = await driver.switchTo().frame(element);
        await driver.sleep(5000);
        return newIframe;

    }

    async switchToDefaultFrame() {
        return await driver.switchTo().defaultContent();
    }

    async getText(criteria) {
        let element = await this.waitforElementLocated(this.findBy(criteria), 10000);
        return element.getText();
    }

    async getAttribute(criteria, attributeName) {
        let element = await this.waitforElementLocated(this.findBy(criteria), 10000);
        return element.getAttribute(attributeName);
    }

    async sendKeys(criteria, keys) {

        let element = await this.waitforElementLocated(this.findBy(criteria), 10000);

        if (element !== null) {

            element.clear();
            element.sendKeys(keys);

        } else {
            element.sendKeys(keys);

        }
    }

    async click(...findBys) {
        let i = await this.actionForAll('click', findBys);
        return i;
    }
}