import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { courses, commonActions } = require('../lib/css-value');

class BlocksToJavaScript extends DomObject {

    async blocksToJavaScript() {

        console.log('Start test blocksToJavaScript()');

        await this.click(courses.blocksToJavaScript, commonActions.showInstructions);

        await this.switchToNewWindow();

        let headerTitle = await this.getText(commonActions.titleOfNewOpenedWindow);
        assert.equal(headerTitle, 'Blocks to JavaScript');
        console.debug(`The header of the new page is "${headerTitle}"`);

        await this.closeCurrentWindow();

        await this.click(commonActions.closeButton);

    }

    test() {
        it('Start learning the "Blocks to JavaScript"', async () => {
            return await this.blocksToJavaScript();
        });
    }

}
export let blocksToJavaScript = new BlocksToJavaScript();