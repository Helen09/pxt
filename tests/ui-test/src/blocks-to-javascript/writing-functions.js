import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { blocksToJavaScript, commonActions } from '../lib/css-value';

class WritingFunctions extends DomObject {

    async writingFunctions() {

        console.log('Start test writingFunctions()');
        
        await this.click(blocksToJavaScript.writingFunctions,commonActions.showInstructions);

        await this.switchToIframe(commonActions.idOfIframe);
        
        let headerTitle = await this.getText(commonActions.titleOfNewOpenedWindow);
        assert.equal(headerTitle, 'Writing Functions');
        console.debug(`The header of the sidedocs is "${headerTitle}"`);

        await this.switchToDefaultFrame();

        await this.click(commonActions.microbitLogo);
    }

    test() {
        it('Start learning the "Writing Functions"', async () => {
            return await this.writingFunctions();
        });
    }

}
export let writingFunctions = new WritingFunctions();