import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { blocksToJavaScript, commonActions } = require('../lib/css-value');

class ConditionalLoops extends DomObject {

    async conditionalLoops() {

        console.log('Start test conditionalLoops()');

        await this.click(blocksToJavaScript.conditionalLoops,commonActions.showInstructions);

        await this.switchToIframe(commonActions.idOfIframe);
        
        let headerTitle = await this.getText(commonActions.titleOfNewOpenedWindow);
        assert.equal(headerTitle, 'Conditional Loops');
        console.debug(`The header of the sidedocs is "${headerTitle}"`);

        await this.switchToDefaultFrame();

        await this.click(commonActions.microbitLogo, blocksToJavaScript.seeMoreButton);
    }

    test() {
        it('Start learning the "Conditional Loops"', async () => {
            return await this.conditionalLoops();
        });
    }

}
export let conditionalLoops = new ConditionalLoops();