import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { courses, commonActions } = require('../lib/css-value');

class KitronikInventorsKit extends DomObject {

    async kitronikInventorsKit() {

        console.log('Start test kitronikInventorsKit()');

        await this.click(courses.kitronikInventorKit, commonActions.showInstructions);

        await this.switchToNewWindow();

        let headerTitle = await this.getText(courses.titleOfKitronik);
        assert.equal(headerTitle, "Inventors Kit Experiment 1 Further Help");
        console.debug(`The header of the new page is "${headerTitle}"`);

        await this.closeCurrentWindow();

        await this.click(commonActions.closeButton);

    }

    test() {
        it('Start learning the "Kitronik Inventor kit"', async () => {
            return await this.kitronikInventorsKit();
        });
    }

}
export let kitronikInventorKit = new KitronikInventorsKit();