import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { blocksToJavaScript, commonActions } = require('../lib/css-value');

class CommandResponder extends DomObject {

    async commandResponder() {

        console.log('Start test commandResponder()');

        await this.click(blocksToJavaScript.commandResponder,commonActions.showInstructions);

        await this.switchToIframe(commonActions.idOfIframe);
        
        let headerTitle = await this.getText(commonActions.titleOfNewOpenedWindow);
        assert.equal(headerTitle, 'Command Responder');
        console.debug(`The header of the sidedocs is "${headerTitle}"`);

        await this.switchToDefaultFrame();

        await this.click(commonActions.microbitLogo, blocksToJavaScript.seeMoreButton);
    }

    test() {
        it('Start learning the "Command Responder"', async () => {
            return await this.commandResponder();
        });
    }

}
export let commandResponder = new CommandResponder();