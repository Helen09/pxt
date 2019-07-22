import { DomObject } from './lib/dom-object';
import assert from "assert";

class NewProjectPage extends DomObject {

    async getCodeSource() {

        console.debug("Start testGetCodeSource()");

        await this.click('.newprojectcard', '.openproject', '.closeIcon');

        await this.click('.openproject');

        await this.sendKeys('input#projectNameInput', 'Project1');

        await this.click('.button.positive');
        await driver.sleep(2000);

        let text = await this.getText("[aria-label='My Projects'] .carouselitem:nth-child(2) .header");

        console.debug(`The header text in the first DIV of 'My Projects' is: ${text}"`);

        assert.equal(text, "Project1");

        await this.click("[aria-label='My Projects'] .carouselitem:nth-child(2)");

        return true;
    }

    test() {
        it('Get the code source', async () => {
            return await this.getCodeSource();
        });
    }
}

export let newProjectPage = new NewProjectPage();