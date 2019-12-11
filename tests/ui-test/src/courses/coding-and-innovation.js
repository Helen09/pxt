import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { courses, commonActions } = require('../lib/css-value');

class CodingAndInnovation extends DomObject {

    async codingAndInnovation() {

        await this.click(courses.codingAndInnovation, commonActions.showInstructions);

        await this.switchToNewWindow();

        let headerTitle = await this.getText(courses.codingAndInnovationTitle);
        assert.equal(headerTitle, 'Coding & Innovation');
        console.debug(`The header of the new page is "${headerTitle}"`);

        await this.closeCurrentWindow();

        await this.click(commonActions.closeButton);

    }

    test() {
        it('Start learning the "Coding And Innovation"', async () => {
            return await this.codingAndInnovation();
        });
    }

}
export let codingAndInnovation = new CodingAndInnovation();