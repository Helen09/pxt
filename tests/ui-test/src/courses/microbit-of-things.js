import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { courses, commonActions } = require('../lib/css-value');

class MicrobitOfThings extends DomObject {

    async microbitOfThings() {

        await this.click(courses.microbitOfThings, commonActions.showInstructions);

        await this.switchToNewWindow();

        let headerTitle = await this.getText(courses.codingAndInnovationTitle);
        assert.equal(headerTitle, "micro:bit of Things");
        console.debug(`The header of the new page is "${headerTitle}"`);

        await this.closeCurrentWindow();

        await this.click(commonActions.closeButton);

    }

    test() {
        it('Start learning the "micro:bit of Things"', async () => {
            return await this.microbitOfThings();
        });
    }

}
export let microbitOfThings = new MicrobitOfThings();