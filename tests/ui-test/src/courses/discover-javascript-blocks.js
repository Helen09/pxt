import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { courses, commonActions } from '../lib/css-value';

class DiscoverJavaScriptBlocks extends DomObject {

    async discoverJavaScriptBlocks() {

        console.log('Start test discoverJavaScriptBlocks()');

        await this.click(courses.discoverJavaScriptBlocks, commonActions.showInstructions);

        await this.switchToNewWindow();

        let headerTitle = await this.getTextByXpath(courses.pageTitleOfDiscover);
        assert.equal(headerTitle, 'Make it: code it');
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