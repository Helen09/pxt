const { By } = require('selenium-webdriver');

class DomObject {

    async actionForAll(actionName, findBys) {
        for (let findBy of findBys) {
            if (findBy) {
                console.debug(`Try to click the element by criteria: ${findBy}`);

                if (typeof findBy === 'string') {
                    findBy = await By.css(findBy);
                }

                let element = await driver.wait(until.elementLocated(findBy));
                await driver.sleep(1000);
                await element[actionName]();
            }
        }
        return true;
    }

    async sendKeys(findBy, keys) {

        if (typeof findBy === 'string') {
            findBy = await By.css(findBy);
        }

        let element = await driver.findElement(findBy);
        await element["actionName"](keys);
        await driver.sleep(8000);
        return true;
    }


    async click(...findBys) {
        let i = await this.actionForAll('click', findBys);
        return i;
    }
}
class NewProjectPage extends DomObject {

    async getCodeSource() {

        console.debug("Start testGetCodeSource()");

        await this.click('.newprojectcard', '.openproject');
        await driver.sleep(1000);

        console.debug(`Input`);
        //   await driver.findElement(By.css('input#projectNameInput')).sendKeys('fortest');

        return await this.click(By.className('icon close remove circle '));
    }

    async testGetCodeSource() {
        return await this.getCodeSource();
    }

    test(){
        it('Get the code source', async () =>{
            return await this.testGetCodeSource();
        });
    }

}

export let newProjectPage = new NewProjectPage();