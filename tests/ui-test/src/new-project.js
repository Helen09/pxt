import { DomObject } from './lib/dom-object';
import { By } from 'selenium-webdriver';
import { AssertionError } from 'assert';

class NewProjectPage extends DomObject {

    async getCodeSource() {

        console.debug("Start testGetCodeSource()");
        await this.click('.newprojectcard', '.openproject');

        console.debug(`Input`);
        await this.sendKeys('input#projectNameInput', 'newProjectTest');
        //await driver.sleep(5000);
        await this.click('.positive');
        await driver.sleep(5000);
        return true;
    }

    test() {
        it('Get the code source', async () => {
            return await this.getCodeSource();
        });
        // it('Get the new project name', async () => {
        //     await this.getText('.ui.card.link.file.header').then(b => {
        //         console.log(b);
        //     });
        // });
    }
}

export let newProjectPage = new NewProjectPage();
