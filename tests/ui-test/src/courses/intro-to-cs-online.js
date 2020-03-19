import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { courses, commonActions } = require('../lib/css-value');

class IntroToCsOnline extends DomObject {

    async introToCsOnline() {

        console.log('Start test introToCsOnline()');

        await this.click(courses.introToCsOnline, commonActions.showInstructions);

        await this.switchToNewWindow();

        let headerTitle = await this.getText(commonActions.titleOfNewOpenedWindow);
        assert.equal(headerTitle, 'Intro to CS');
        console.debug(`The header of the new page is "${headerTitle}"`);

        await this.closeCurrentWindow();

        await this.click(commonActions.closeButton);

    }

    test() {
        it('Start learning the "Intro to CS"', async () => {
            return await this.introToCsOnline();
        });
    }

}
export let introToCsOnline = new IntroToCsOnline();