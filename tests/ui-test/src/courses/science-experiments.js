import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { courses, commonActions } = require('../lib/css-value');

class ScienceExperiments extends DomObject {

    async scienceExperiments() {

        await this.click(courses.scienceExperiments, commonActions.showInstructions);

        await this.switchToNewWindow();

        let headerTitle = await this.getText(commonActions.titleOfNewOpenedWindow);
        assert.equal(headerTitle, 'Science Experiments');
        console.debug(`The header of the new page is "${headerTitle}"`);

        await this.closeCurrentWindow();

        await this.click(commonActions.closeButton);

    }

    test() {
        it('Start learning the "Science Experiments"', async () => {
            return await this.scienceExperiments();
        });
    }

}
export let scienceExperiments = new ScienceExperiments();