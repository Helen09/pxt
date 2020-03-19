import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { blocksToJavaScript, commonActions } = require('../lib/css-value');

class WritingCode extends DomObject {

    async writingCode() {

        console.log('Start test writingCode()');

        await this.click(blocksToJavaScript.writingCode,commonActions.showInstructions);

        await this.switchToIframe(commonActions.idOfIframe);
        
        let headerTitle = await this.getText(commonActions.titleOfNewOpenedWindow);
        assert.equal(headerTitle, 'Writing Code');
        console.debug(`The header of the sidedocs is "${headerTitle}"`);

        await this.switchToDefaultFrame();

        await this.click(commonActions.microbitLogo);
    }

    test() {
        it('Start learning the "Writing Code"', async () => {
            return await this.writingCode();
        });
    }

}
export let writingCode = new WritingCode();