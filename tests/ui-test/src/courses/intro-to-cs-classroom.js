import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { courses, commonActions } = require('../lib/css-value');

class IntroToCsClassroom extends DomObject {

    async introToCsClassroom() {

        console.log('Start test introToCsClassroom()');

        await this.click(courses.introToCsClassroom, commonActions.showInstructions);

        await this.switchToNewWindow();

        let headerTitle = await this.getText(commonActions.titleOfNewOpenedWindow);
        assert.equal(headerTitle, 'Intro to CS - Educator edition');
        console.debug(`The header of the new page is "${headerTitle}"`);

        await this.closeCurrentWindow();

        await this.click(commonActions.closeButton);

    }

    test() {
        it('Start learning the "Intro to CS - Educator edition"', async () => {
            return await this.introToCsClassroom();
        });
    }

}
export let introToCsClassroom = new IntroToCsClassroom();