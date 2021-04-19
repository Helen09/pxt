import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { blocksToJavaScript, commonActions } from '../lib/css-value';

class ComplexConditionals extends DomObject {

    async complexConditionals() {

        console.log('Start test complexConditionals()');

        await this.click(blocksToJavaScript.complexConditionals,commonActions.showInstructions);

        await this.switchToIframe(commonActions.idOfIframe);
        
        let headerTitle = await this.getText(commonActions.titleOfNewOpenedWindow);
        assert.equal(headerTitle, 'Complex conditionals');
        console.debug(`The header of the sidedocs is "${headerTitle}"`);

        await this.switchToDefaultFrame();

        await this.click(commonActions.microbitLogo);
    }

    test() {
        it('Start learning the "Complex conditionals"', async () => {
            return await this.complexConditionals();
        });
    }

}
export let complexConditionals = new ComplexConditionals();