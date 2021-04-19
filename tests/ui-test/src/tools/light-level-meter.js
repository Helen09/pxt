import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { tools, commonActions } from '../lib/css-value';

class LightLevelMeter extends DomObject {

    async lightLevelMeter() {

        console.log('Start test lightLevelMeter()');

        await this.click(tools.lightLevelMeter, commonActions.showInstructions);

        await this.switchToIframe(commonActions.idOfIframe);

        let headerTitle = await this.getText(commonActions.titleOfNewOpenedWindow);
        assert.equal(headerTitle, 'Light Level Meter');
        console.debug(`The header of the sidedocs is "${headerTitle}"`);
        
        await this.switchToDefaultFrame();
        await this.click(commonActions.microbitLogo);

    }

    test() {
        
        it('Start learning the "Light Level Meter"', async () => {
            return await this.lightLevelMeter();
        });
    }

}
export let lightLevelMeter = new LightLevelMeter();