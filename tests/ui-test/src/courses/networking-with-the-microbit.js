import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { courses, commonActions } = require('../lib/css-value');

class NetworkingWithTheMicrobit extends DomObject {

    async networkingWithTheMicrobit() {

        console.log('Start test networkingWithTheMicrobit()');

        await this.click(courses.networkingWithTheMicrobit, commonActions.showInstructions);

        await this.switchToNewWindow();

        let headerTitle = await this.getText(courses.pageTitleOfNetwork);
        assert.equal(headerTitle, 'Networking with the Micro:bit');
        console.debug(`The header of the new page is "${headerTitle}"`);

        await this.closeCurrentWindow();

        await this.click(commonActions.closeButton);

    }

    test() {
        it('Start learning the "Networking with the Micro:bit"', async () => {
            return await this.networkingWithTheMicrobit();
        });
    }

}
export let networkingWithTheMicrobit = new NetworkingWithTheMicrobit();