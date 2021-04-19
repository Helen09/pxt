import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { tools, commonActions } from '../lib/css-value';

class AnalogPinTester extends DomObject {

    async analogPinTester() {

        console.log('Start test analogPinTester()');

        await this.click(tools.analogPinTester, commonActions.showInstructions);

        await this.switchToIframe(commonActions.idOfIframe);

        let headerTitle = await this.getText(commonActions.titleOfNewOpenedWindow);
        assert.equal(headerTitle, 'Analog Pin Tester');
        console.debug(`The header of the sidedocs is "${headerTitle}"`);

        await this.switchToDefaultFrame();
        await this.click(commonActions.microbitLogo, tools.seeMoreButton);

    }

    test() {

        it('Start learning the "Analog Pin Tester"', async () => {
            return await this.analogPinTester();
        });
    }
}
export let analogPinTester = new AnalogPinTester();