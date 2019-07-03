import { DomObject } from './lib/dom-object';
import { By } from 'selenium-webdriver';
import { AssertionError } from 'assert';

class ShareProjectPage extends DomObject {

    async getCodeSource() {

        console.debug("Start testGetCodeSource()");

        await this.click('div[aria-label="My Projects"] .carouselitem:nth-child(2)', '.shareproject');

        await driver.sleep(5000);
        // await this.getText('.right labeled primary > span').then(b => {

        // });


    }

    test() {
        it('Get the code source', async () => {
            return await this.getCodeSource();
        });
    }
}

export let shareProjectPage = new ShareProjectPage();