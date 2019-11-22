import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { blocksToJavaScript, commonActions } = require('../lib/css-value');

class HelloJavaScript extends DomObject {

    async helloJavaScript() {

        await this.click(blocksToJavaScript.helloJavaScript,commonActions.showInstructions);

        await this.switchToIframe(commonActions.idOfIframe);
        
        let headerTitle = await this.getText(commonActions.titleOfNewOpenedWindow);
        assert.equal(headerTitle, 'Hello JavaScript');
        console.debug(`The header of the sidedocs is "${headerTitle}"`);

        await this.switchToDefaultFrame();

        await this.click(commonActions.microbitLogo);
    }

    test() {
        it('Start learning the "Hello JavaScript"', async () => {
            return await this.helloJavaScript();
        });
    }

}
export let helloJavaScript = new HelloJavaScript();