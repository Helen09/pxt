import { By } from 'selenium-webdriver';
import fs from 'fs';
import util from 'util';
const screenshotsFolder = './screenshots';
import dateformat from 'dateformat';

export class DomObject {

    async waitforElementLocated(criteria) {
        return await driver.wait(until.elementLocated(By.css(criteria)));
        
    }

    async getCurrentUrl(){
        return await driver.getCurrentUrl();
    }
    async getAlertText(){
        let alert = await driver.switchTo().alert();
        return alert.getText();
    }

    async acceptAlert(){
        let alert = await driver.switchTo().alert();
        return alert.accept();
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
        let element = await this.waitforElementLocated(criteria);
        return element.getRect();
    }

    async contextClick(criteria) {
        let actions = driver.actions();

        let element = await this.waitforElementLocated(criteria);
        return actions.contextClick(element).perform();
    }

    async dragAndDropByElement(criteria, criteria2) {
        let actions = driver.actions();

        let origin = await this.waitforElementLocated(criteria);
        let goal = await this.waitforElementLocated(criteria2);

        return actions.dragAndDrop(origin, goal).perform();
    }

    async dragAndDropByCoordinate(criteria, xoffset, yoffset) {
        let actions = driver.actions();

        let origin = await this.waitforElementLocated(criteria);
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
        let handles = await driver.getAllWindowHandles();
        await driver.close();
        return await driver.switchTo().window(handles[0]);
    }
    

    async switchToNewWindow() {
        await driver.sleep(3000);
        let handles = await driver.getAllWindowHandles();
        return await driver.switchTo().window(handles[1]);
    } 

    async switchToIframe(criteria) {
        await driver.sleep(5000);
        let element = await this.waitforElementLocated(criteria);
        return await driver.switchTo().frame(element);
    }

    async switchToDefaultFrame() {
        return await driver.switchTo().defaultContent();
    }

    async getText(criteria) {
        let element = await this.waitforElementLocated(criteria);
        return element.getText();
    }

    async getTextByXpath(criteria){
        let element = await driver.findElement(By.xpath(criteria));
        return element.getText();
    }
    async getAttribute(criteria, attributeName) {
        let element = await this.waitforElementLocated(criteria);
        return element.getAttribute(attributeName);
    }

    async sendKeys(criteria, keys) {

        let element = await this.waitforElementLocated(criteria);

        if (element !== "") {

            element.clear();
            element.sendKeys(keys);

        } else {
            element.sendKeys(keys);

        }
    }

    async click(...findBys) {
        for(let criteria of findBys){
            if(criteria){
                let element = await this.waitforElementLocated(criteria);
                await driver.sleep(1000);
                await element['click']();
            }
        }
        return true
    }
}
export let domobject = new DomObject();