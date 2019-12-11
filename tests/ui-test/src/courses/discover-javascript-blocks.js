import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { courses, commonActions } = require('../lib/css-value');

class DiscoverJavaScriptBlocks extends DomObject {

    async discoverJavaScriptBlocks() {

        await this.click(courses.discoverJavaScriptBlocks, commonActions.showInstructions);

        await this.switchToNewWindow();

        let headerTitle = await this.getText(courses.pageTitleOfDiscover);
        assert.equal(headerTitle, 'Discover MakeCode');
        console.debug(`The header of the new page is "${headerTitle}"`);

        await this.closeCurrentWindow();

        await this.click(commonActions.closeButton);

    }

    test() {
        it('Start learning the "Discover MakeCode"', async () => {
            return await this.discoverJavaScriptBlocks();
        });
    }

}
export let discoverJavaScriptBlocks = new DiscoverJavaScriptBlocks();