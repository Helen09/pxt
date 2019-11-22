import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { blocksToJavaScript, commonActions } = require('../lib/css-value');

class StarterBlocks extends DomObject {

    async starterBlocks() {

        await this.click(blocksToJavaScript.starterBlocks,commonActions.showInstructions);

        await this.switchToIframe(commonActions.idOfIframe);
        
        let headerTitle = await this.getText(commonActions.titleOfNewOpenedWindow);
        assert.equal(headerTitle, 'Starter Blocks');
        console.debug(`The header of the sidedocs is "${headerTitle}"`);

        await this.switchToDefaultFrame();

        await this.click(commonActions.microbitLogo);
    }

    test() {
        it('Start learning the "Starter Blocks"', async () => {
            return await this.starterBlocks();
        });
    }

}
export let starterBlocks = new StarterBlocks();