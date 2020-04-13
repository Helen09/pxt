import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { turtle, commonActions } = require('../lib/css-value');

class Scanner extends DomObject {

    async scanner() {

        console.log('Start test scanner()');

        await this.click(turtle.scanner, commonActions.showInstructions);

        await this.switchToIframe(commonActions.idOfIframe);
        
        let headerTitle = await this.getText(commonActions.titleOfNewOpenedWindow);
        assert.equal(headerTitle, 'Turtle Scanner');
        console.debug(`The header of the sidedocs is "${headerTitle}"`);
      

        await this.switchToDefaultFrame();

        await this.click(commonActions.microbitLogo);

    }

    test() {
        it('Start learning the "Turtle Scanner"', async () => {
            return await this.scanner();
        });
    }

}
export let scanner = new Scanner();