import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { courses, commonActions } = require('../lib/css-value');

class LogicLab extends DomObject {

    async logicLab() {

        console.log('Start test logicLab()');

        await this.click(courses.logicLab, commonActions.showInstructions);

        await this.switchToNewWindow();

        let headerTitle = await this.getText(commonActions.titleOfNewOpenedWindow);
        assert.equal(headerTitle, 'Logic Lab');
        console.debug(`The header of the new page is "${headerTitle}"`);

        await this.closeCurrentWindow();

        await this.click(commonActions.closeButton);

    }

    test() {
        it('Start learning the "Logic Lab"', async () => {
            return await this.logicLab();
        });
    }

}
export let logicLab = new LogicLab();